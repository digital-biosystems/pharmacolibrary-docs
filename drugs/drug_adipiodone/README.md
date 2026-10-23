<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;adipiodone&quot;}]"></div>

# adipiodone

- **generic name:** adipiodone
- **ATC codes:** `V08AC04`
- **DrugBank:** [DB04711](https://go.drugbank.com/drugs/DB04711) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Adipiodone (iodipamide) is an iodinated, water-soluble X-ray contrast medium used to visualise the bile ducts and gallbladder. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4682934](https://www.wikidata.org/wiki/Q4682934) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lin_1977_reference](drugs/drug_adipiodone/Adipiodone_Lin1977_reference.md) | — | 1-compartment (no model) | 0 | Lin SK et al., Iodipamide kinetics: capacity-limited b…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600661204](https://doi.org/10.1002/jps.2600661204) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:03 | 4:08 | 0/1/0 | 0/0/0 | 0/0/0 | 47,700/3,835 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lin_1977.pdf` | Lin SK et al., Iodipamide kinetics: capacity-limited b…, Journal of pharmaceutical s… (1977) | popPK | 9 | [10.1002/jps.2600661204](https://doi.org/10.1002/jps.2600661204) | [925927](https://pubmed.ncbi.nlm.nih.gov/925927) | Original PK study of iodipamide (adipiodone) in dogs with quantitative parameters (Tm ~1.0 µmole/kg/min, clearance, protein binding) reported in the abstract, though full Michaelis-Menten estimates may be in the paper body. |

<sub>queue written 2026-10-07T22:01:15.621257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bito_1976 | irrelevant | 0 | 0 | Study concerns prostaglandin transport across blood-brain/CSF barriers in rabbits; adipiodone is not the subject drug (iodipamide appears only as a transport inhibitor), and no PK disposition parameters for adipiodone are reported. |
| popPK | Feld_1975 | irrelevant | 2 | 2 | This is a choleretic/physiology study of iodipamide (adipiodone) in dogs reporting bile flow and osmotic activity, not PK disposition parameters (CL, V, half-life, or a PK model); the numbers present are choleretic slopes, not pharmacokinetic values. |
| popPK | Kormano_1979 | irrelevant | 0 | 0 | The study concerns diatrizoate and iodipamide, not adipiodone, and reports only distribution volumes in blood without PK disposition parameters. |
| popPK | LAJOS_1956 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| popPK | Lauteala_1986 | irrelevant | 1 | 1 | This is a hematology/toxicity study of iodipamide ethyl ester particles in rats, not adipiodone, and no PK disposition parameters (CL, V, half-life with volume) are reported—only a crude plasma particle disappearance percentage. |
| popPK | Odlind_1985 | irrelevant | 0 | 0 | The paper studies iothalamate (and EDTA/PAH) as GFR markers; adipiodone is not the subject drug and no adipiodone PK parameters appear. |
| popPK | Rosenberg_1980 | irrelevant | 2 | 1 | Iodipamide (adipiodone) appears only as a comparator to the new agent iosulamide; no quantitative PK parameters (CL, V, half-life values) for iodipamide are reported, only LD50 and qualitative excretion comparisons. |
| popPK | Song_1976 | irrelevant | 1 | 2 | The study concerns iodipamide, a different contrast agent, not adipiodone, and reports only excretion half-times in an isolated perfused rabbit liver rather than PK disposition parameters. |
| popPK | Swanson_1985 | irrelevant | 1 | 0 | A qualitative review of ionic contrast media selection; adipiodone (iodipamide) is only mentioned as a cholangiography agent with no PK parameters or numeric values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 22:01 UTC</sub>
