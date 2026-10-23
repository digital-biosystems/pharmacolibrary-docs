<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;mercury, metallic&quot;}]"></div>

# mercury, metallic

- **generic name:** mercury, metallic
- **ATC codes:** `D08AK05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Metallic mercury was historically used in dermatological preparations as an antiseptic and disinfectant. Mercurial antiseptics are no longer used in human medicine because of mercury's toxicity.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48397](https://www.wikidata.org/wiki/Q48397) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sällsten_1994_reference](drugs/drug_mercury_metallic/MercuryMetallic_Sllsten1994_reference.md) | — | 1-compartment (no model) | 0 | Sällsten G et al., Clearance half life of mercury in urine…, Occupational and environmen… (1994) | [10.1136/oem.51.5.337](https://doi.org/10.1136/oem.51.5.337) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:38 | 0:26 | 0/1/0 | 0/0/0 | 0/0/0 | 13,038/1,009 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 205 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sällsten_1994.pdf` | Sällsten G et al., Clearance half life of mercury in urine…, Occupational and environmen… (1994) | popPK | 8 | [10.1136/oem.51.5.337](https://doi.org/10.1136/oem.51.5.337) | [8199685](https://pubmed.ncbi.nlm.nih.gov/8199685) | The study reports a specific median half-life (55 days) for mercury elimination in urine following occupational exposure to metallic mercury vapors. |

<sub>queue written 2026-10-07T22:37:57.098912+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aghila_2026 | irrelevant | 0 | 0 | The study focuses on osteogenic efficacy of dental pulp stem cell-derived exosomes and uses mercury only in the context of 'mercury intrusion porosimetry,' not as the subject drug for PK analysis. |
| popPK | Boddington_1979 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Castillo-Aleman_2025 | irrelevant | 0 | 0 | The study investigates the removal of environmental toxins via a medical procedure (plasmapheresis) and does not report population pharmacokinetic parameters (CL, V, ka, etc.) for mercury as a subject drug. |
| popPK | Charleston_1995 | irrelevant | 1 | 0 | The paper reports histological distribution of mercury in monkey brain tissue but contains no quantitative pharmacokinetic parameters (clearance, volume, half-life) for metallic mercury. |
| popPK | Deckart_1975 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | FARNSWORTH_1946 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| popPK | Friedmann_1973 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Hendriks_1995 | irrelevant | 1 | 1 | The paper presents theoretical scaling models for outflow rates based on Kow and species size, mentioning mercury only in a general context without providing specific quantitative PK parameters for mercury_metallic. |
| popPK | McCabe_2025 | irrelevant | 0 | 0 | The paper concerns CT imaging simulation and uses a "Mercury phantom" as a calibration object, not the drug mercury_metallic pharmacokinetics. |
| popPK | STREHLER_1957 | irrelevant | 0 | 0 | no_text gate: only 185 chars of text extracted (&lt; 400) |
| popPK | Sonji_2026 | irrelevant | 0 | 0 | The paper is a conceptual review proposing a framework for "Mercury Debt" and does not report original quantitative pharmacokinetic parameters or specific numeric values for mercury. |
| popPK | Togna_1984 | irrelevant | 0 | 0 | The paper investigates the in vitro inhibition of ADP degradation by aortic tissue by mercury, which is a mechanistic study and does not report pharmacokinetic parameters for mercury itself. |
| popPK | Vahter_1995 | irrelevant | 2 | 2 | The study focuses on toxicological accumulation and local demethylation kinetics (half-lives in specific tissues) of methyl mercury in monkeys, rather than reporting population pharmacokinetic parameters (CL, V, Q) for the subject drug mercury_metallic (inorganic mercury) as a primary dosed compound. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 22:37 UTC</sub>
