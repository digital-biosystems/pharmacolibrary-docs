<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;phenolsulfonphthalein&quot;}]"></div>

# phenolsulfonphthalein

- **generic name:** phenolsulfonphthalein
- **ATC codes:** `V04CH03`
- **DrugBank:** [DB13212](https://go.drugbank.com/drugs/DB13212) · **PubChem:** not captured
- **molar mass:** 354.38 g/mol (C19H14O5S) — DrugBank
- **groups:** experimental

## About

Phenolsulfonphthalein is a diagnostic agent used in tests of kidney function and for detecting ureteral injuries. It is classed as an experimental diagnostic substance and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418719](https://www.wikidata.org/wiki/Q418719) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenolsulfonphthalein | parent | 354.38 | C19H14O5S | DrugBank | — | Hinchcliff_1987, Nishida_2003 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 29.44 ‡ | L/h | 0.00701 L/min/kg | horse and pony mares | horse | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hinchcliff_1987_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Hinchcliff1987_reference.md) |
| t½ | t1/2z | 0.2733 | h | 16.4 minutes | horse and pony mares | horse | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hinchcliff_1987_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Hinchcliff1987_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hinchcliff_1987_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Hinchcliff1987_reference.md) | — | 1-compartment (no model) | 3 | Hinchcliff KW et al., Pharmacokinetics of phenolsulfonphthale…, American journal of veterin… (1987) | — |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Nishida_2003_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_reference.md) | — | 1-compartment (no model) | 7 | Nishida K et al., Influence of liver disease on phenolsul…, Biological & pharmaceutical… (2003) | [10.1248/bpb.26.988](https://doi.org/10.1248/bpb.26.988) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:20 | 0:59 | 1/1/0 | 0/0/0 | 0/0/0 | 46,365/2,413 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hinchcliff_1987.pdf` | Hinchcliff KW et al., Pharmacokinetics of phenolsulfonphthale…, American journal of veterin… (1987) | popPK | 10 | not captured | [3631717](https://pubmed.ncbi.nlm.nih.gov/3631717) | Original PK study of PSP in horses/ponies with numeric CL, Vss, and half-life values reported directly in the abstract. |
| `Nishida_2004.pdf` | Nishida K et al., Absorption characteristics of compounds…, European journal of pharmac… (2004) | popPK | 7 | [10.1016/j.ejpb.2004.04.016](https://doi.org/10.1016/j.ejpb.2004.04.016) | [15451548](https://pubmed.ncbi.nlm.nih.gov/15451548) | Reports numeric ka (0.0137 min−1) and absorption ratios for PSP from rat kidney surface with a two-compartment first-order absorption model, though it is an absorption study rather than full disposition characterization. |
| `Honjo_2014.pdf` | Honjo H et al., Effect of selective cyclooxygenase-2 in…, Drug metabolism and drug in… (2014) | popPK | 6 | [10.1515/dmdi-2014-0008](https://doi.org/10.1515/dmdi-2014-0008) | [24870608](https://pubmed.ncbi.nlm.nih.gov/24870608) | PSP is the subject drug with a two-compartment PK analysis in rats, but numeric parameter values (CL, V, etc.) are not shown in the evidence, only percentages of urinary recovery. |

<sub>queue written 2026-10-07T21:19:44.383909+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Honjo_2014 | relevant | 6 | 3 | PSP is the subject drug with a two-compartment PK analysis in rats, but numeric parameter values (CL, V, etc.) are not shown in the evidence, only percentages of urinary recovery. |
| popPK | Kym_1996 | irrelevant | 0 | 0 | This is an in-vitro bioassay study of impurities in phenol red, not a pharmacokinetic study of phenolsulfonphthalein; no PK parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:19 UTC</sub>
