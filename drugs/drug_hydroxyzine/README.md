<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;hydroxyzine&quot;}]"></div>

# hydroxyzine

- **generic name:** hydroxyzine
- **ATC codes:** `N05BB01`
- **DrugBank:** [DB00557](https://go.drugbank.com/drugs/DB00557) · **PubChem:** [CID 3658](https://pubchem.ncbi.nlm.nih.gov/compound/3658)
- **molar mass:** 374.904 g/mol (C21H27ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Hydroxyzine is an antihistamine medicine used to treat anxiety and anxiety disorders, and also to relieve itching and vomiting. It is an approved medication, classified as an anxiolytic, and remains in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421937](https://www.wikidata.org/wiki/Q421937) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Wang_1998_QT](drugs/drug_hydroxyzine/pd_Wang_1998_QT.md) | QT prolongation ← hydroxyzine · direct Emax (saturable) effect | — | Wang WX et al., "Conventional" antihistamines slow card…, Journal of cardiovascular p… (1998) | [10.1097/00005344-199807000-00019](https://doi.org/10.1097/00005344-199807000-00019) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hydroxyzine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` regulator/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (inverse agonist), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:48 | 1:49 | 0/0/0 | 0/1/0 | 0/0/0 | 19,198/780 | ollama / glm-5.3-flash | 4 | 4/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Paine_2022.pdf` | Paine SW et al., Plasma and urine pharmacokinetics of hy…, Journal of veterinary pharm… (2022) | popPK | 9 | [10.1111/jvp.13010](https://doi.org/10.1111/jvp.13010) | [34469007](https://pubmed.ncbi.nlm.nih.gov/34469007) | Population PK model of hydroxyzine (and its metabolite cetirizine) in horses, but numeric parameter values are not present in the provided evidence. |
| `Wang_1998.pdf` | Wang WX et al., "Conventional" antihistamines slow card…, Journal of cardiovascular p… (1998) | pd | 4 | [10.1097/00005344-199807000-00019](https://doi.org/10.1097/00005344-199807000-00019) | [9676731](https://www.ncbi.nlm.nih.gov/pubmed/9676731) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T18:47:59.530415+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Di_2021 | not_relevant | 3 | 1 | Abstract only mentions hydroxyzine as an ADH substrate; no genotype-linked PK/PD effect reported. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | Hydroxyzine only appears as an exclusion criterion (QT risk) in a COVID-19 trial protocol; no pharmacogenomic PK/PD effect reported. |
| PGx | Fadel_2026 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on hydroxyzine PK/PD is reported; only drug-drug interaction concerns (CYP2D6 inhibition affecting flecainide, not hydroxyzine). |
| PGx | Hamelin_1998 | not_relevant | 3 | 5 | Hydroxyzine is studied as an inhibitor of CYP2D6, not as a drug whose PK/PD is altered by a gene variant; no pharmacogenomic effect on hydroxyzine parameters is reported. |
| PGx | Ivashchenko_2026 | not_relevant | 0 | 0 | Hydroxyzine is only mentioned as a co-prescribed anxiolytic; no gene variant effect on hydroxyzine PK/PD parameters is reported. |
| popPK | Paine_2022 | relevant | 9 | 2 | Population PK model of hydroxyzine (and its metabolite cetirizine) in horses, but numeric parameter values are not present in the provided evidence. |
| PGx | Rosu_2015 | not_relevant | 0 | 0 | Hydroxyzine is only mentioned as symptomatic treatment; no gene variant effect on its PK/PD is reported. |
| popPK | Szabo_1993 | irrelevant | 1 | 0 | Hydroxyzine is only used as an H1-receptor blocking agent in a PET study of [11C]pyrilamine kinetics; no PK parameters for hydroxyzine itself are reported. |
| popPK | Wang_1998 | irrelevant | 1 | 1 | In-vitro/isolated feline heart pharmacodynamics study; hydroxyzine is a test drug with EC50 values, not PK disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
