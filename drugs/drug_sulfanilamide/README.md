<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;sulfanilamide&quot;}]"></div>

# sulfanilamide

- **generic name:** sulfanilamide
- **ATC codes:** `D06BA05`, `J01EB06`
- **DrugBank:** [DB00259](https://go.drugbank.com/drugs/DB00259) · **PubChem:** [CID 5333](https://pubchem.ncbi.nlm.nih.gov/compound/5333)
- **molar mass:** 172.205 g/mol (C6H8N2O2S) — DrugBank
- **groups:** approved, withdrawn

## About

Sulfanilamide is an antibiotic sulfonamide that was used to treat bacterial infections, including vulvovaginal candidiasis. It is no longer in general use, having been withdrawn, though it remains approved for topical dermatological use in some settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423423](https://www.wikidata.org/wiki/Q423423) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:59 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 67,897/1,214 | einfracz / qwen3.8-27b | 7 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nagwekar_1982.pdf` | Nagwekar JB et al., Effects of phenobarbital on the distrib…, Journal of pharmaceutical s… (1982) | popPK | 9 | [10.1002/jps.2600710412](https://doi.org/10.1002/jps.2600710412) | [7086650](https://pubmed.ncbi.nlm.nih.gov/7086650) | The paper describes a pharmacokinetic study of sulfanilamide in rats, but the evidence provided contains only qualitative descriptions of the models and comparisons, with no specific numeric values for parameters like CL, V, or half-life. |

<sub>queue written 2026-10-07T21:58:54.927957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro antibacterial activity of coumarin derivatives, not a pharmacokinetic study of sulfanilamide. |
| popPK | Bortnick_2019 | irrelevant | 0 | 0 | The study investigates the association between mineral metabolism biomarkers (FGF-23, phosphate) and valvular calcification, and does not involve sulfanilamide pharmacokinetics. |
| popPK | Bortnick_2022 | irrelevant | 0 | 0 | The paper investigates the association between HDL cholesterol and aortic valve calcification in the Multi-Ethnic Study of Atherosclerosis, with no mention of sulfanilamide or pharmacokinetic parameters. |
| popPK | Dankwa_2026 | irrelevant | 0 | 0 | The paper is a clinical study of aortic valved conduits and contains no pharmacokinetic data for sulfanilamide. |
| popPK | Fashanu_2020 | irrelevant | 0 | 0 | The paper studies valvular calcification and heart failure in the MESA cohort and contains no pharmacokinetic data for sulfanilamide. |
| popPK | He_2025 | irrelevant | 0 | 0 | The study focuses on the biocontrol of apple Valsa canker by the fungus-derived substance altenusin and does not involve sulfanilamide or its pharmacokinetics. |
| popPK | He_2025_2 | irrelevant | 0 | 0 | The paper reports on the antifungal activity of chaetoglobosin D against Cytospora mali, which is unrelated to the pharmacokinetics of sulfanilamide. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The study investigates the association between aortic valve calcification and coronary atherosclerotic plaque volume progression in a human registry and contains no pharmacokinetic data for sulfanilamide. |
| popPK | Massera_2021 | irrelevant | 0 | 0 | The paper investigates the association between bone mineral density and cardiac valve calcification and contains no pharmacokinetic data for sulfanilamide. |
| popPK | Nagwekar_1982 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of sulfanilamide in rats, but the evidence provided contains only qualitative descriptions of the models and comparisons, with no specific numeric values for parameters like CL, V, or half-life. |
| popPK | Rigas_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chloroquinoxaline sulfonamide (CQS), a different drug, not sulfanilamide. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The paper studies the association between sex hormones and aortic calcification and does not involve sulfanilamide pharmacokinetics. |
| popPK | Thiele-Bruhn_2005 | irrelevant | 0 | 0 | The study investigates the ecological/microbial effects of sulfanilamide in soil using dose-response models, not its pharmacokinetic disposition (CL, V, etc.). |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the antifungal activity of alkaloids from a plant species against plant pathogens and does not involve sulfanilamide or pharmacokinetics. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel sulfonamide derivatives as plant bactericides, reporting in vitro antibacterial potency (EC50) and mechanism of action, but containing no pharmacokinetic data for sulfanilamide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
