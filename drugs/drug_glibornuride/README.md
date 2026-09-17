<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibornuride&quot;}]"></div>

# glibornuride

- **generic name:** glibornuride
- **ATC codes:** `A10BB04`
- **DrugBank:** [DB08962](https://go.drugbank.com/drugs/DB08962)
- **groups:** approved, withdrawn

## About

**Description.** Glibornuride is a sulfonylurea-type anti-diabetic drug.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 21:36 | 2:15 | 0/0/0 | 1/0/0 | 0/0/0 | 27,052/1,164 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glibornuride/pd_Haupt_1971_2_blood_glucose.md) | Haupt (1971) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glibornuride/pd_Haupt_1971_2_free_fatty_acids.md) | Haupt (1971) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glibornuride/pd_Haupt_1971_2_serum_insulin.md) | Haupt (1971) | — |

## Coverage

- **PubMed hits:** 10 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stoeckel_1985.pdf` | Stoeckel K et al., Lack of effect of tenoxicam on glibornu…, British journal of clinical… (1985) | popPK | 9 | [10.1111/j.1365-2125.1985.tb02638.x](https://doi.org/10.1111/j.1365-2125.1985.tb02638.x) | [3157397](https://pubmed.ncbi.nlm.nih.gov/3157397) | The study is a relevant PK interaction study for glibornuride, but the specific numeric parameter values are not present in the provided evidence text. |
| `Dubach_1975.pdf` | Dubach UC et al., [On the multiple-dose kinetics of glibo…, Arzneimittel-Forschung (1975) | popPK | 8 | not captured | [130138](https://pubmed.ncbi.nlm.nih.gov/130138) | The paper describes a pharmacokinetic study of glibornuride in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Zini_1991.pdf` | Zini S et al., Characterization of sulfonylurea recept…, The Journal of pharmacology… (1991) | pd | 4 | not captured | [1658303](https://www.ncbi.nlm.nih.gov/pubmed/1658303) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-15T21:36:06.574499+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dubach_1975 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of glibornuride in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Haupt_1971_2 | irrelevant | 0 | 0 | The study is pharmacodynamic (dose-response and insulin secretion) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for glibornuride. |
| popPK | Keller_1986 | irrelevant | 0 | 0 | The study is a metabolic/pharmacodynamic assessment of insulin sensitivity using the euglycemic clamp technique and does not report pharmacokinetic parameters (CL, V, ka, etc.) for glibornuride. |
| popPK | Löffler-Walz_1998 | irrelevant | 0 | 0 | The study is an in-vitro binding assay for K(ATP) channel modulators, not a pharmacokinetic study, and glibornuride is used only as a comparator ligand. |
| popPK | Nielsen-Kudsk_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle relaxation, not a pharmacokinetic study, and reports no disposition parameters for glibornuride. |
| popPK | Skillman_1981 | irrelevant | 1 | 0 | The paper is a review of sulfonylurea pharmacology that mentions glibornuride only as a comparator for potency and protein binding, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Stoeckel_1985 | relevant | 9 | 0 | The study is a relevant PK interaction study for glibornuride, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Zini_1991 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of potassium channel openers and sulfonylurea receptors in guinea pig intestine and does not report pharmacokinetic or pharmacodynamic modeling for glibornuride. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_glibornuride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
