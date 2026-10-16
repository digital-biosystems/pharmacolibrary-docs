<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;diphenoxylate&quot;}]"></div>

# diphenoxylate

- **generic name:** diphenoxylate
- **ATC codes:** `A07DA01`
- **DrugBank:** [DB01081](https://go.drugbank.com/drugs/DB01081) · **PubChem:** [CID 13505](https://pubchem.ncbi.nlm.nih.gov/compound/13505)
- **molar mass:** 452.5873 g/mol (C30H32N2O2) — DrugBank
- **groups:** approved, illicit

## About

Diphenoxylate is an opioid drug used to treat diarrhea. It is an approved antidiarrheal medicine, though it is not authorised in the European Union and can be subject to misuse.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416431](https://www.wikidata.org/wiki/Q416431) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:58 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 12,753/856 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/3 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=diphenoxylate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 32 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jackson_1987.pdf` | Jackson LS et al., The evaluation and application of a rad…, Journal of pharmacological… (1987) | popPK | 9 | [10.1016/0160-5402(87)90069-6](https://doi.org/10.1016/0160-5402(87)90069-6) | [3682841](https://pubmed.ncbi.nlm.nih.gov/3682841) | The study reports quantitative pharmacokinetic parameters (half-lives, Cmax, Tmax) for diphenoxylic acid, the major active metabolite of diphenoxylate, in human plasma. |
| `Coupar_1994.pdf` | Coupar IM et al., Opiate and opiate antidiarrhoeal drug a…, Journal of autonomic pharma… (1994) | pd | 4 | [10.1111/j.1474-8673.1994.tb00591.x](https://doi.org/10.1111/j.1474-8673.1994.tb00591.x) | [8150811](https://www.ncbi.nlm.nih.gov/pubmed/8150811) | metadata signals extractable PD data (IC50) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Geng_2015.pdf` | Geng P et al., Effect of diphenoxylate on CYP450 isofo…, International journal of cl… (2015) | pgx | 7 | not captured | [26770498](https://www.ncbi.nlm.nih.gov/pubmed/26770498) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-04T18:58:38.637392+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armstrong_2009 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug-drug interactions (CYP3A4 inhibition/induction) and does not report pharmacogenomic effects of gene variants on diphenoxylate. |
| PGx | Baker_2007 | not_relevant | 0 | 0 | The paper reviews loperamide and does not report pharmacogenomic effects on diphenoxylate. |
| popPK | Cascinu_1993 | irrelevant | 0 | 0 | The study is a clinical trial comparing octreotide and loperamide for chemotherapy-induced diarrhea, with diphenoxylate mentioned only as a general background agent and no pharmacokinetic parameters reported. |
| PD | Cascinu_1993 | not_relevant | 0 | 0 | The paper compares octreotide and loperamide for treating chemotherapy-induced diarrhea and does not report any pharmacodynamic or exposure-response data for diphenoxylate. |
| popPK | Cohen_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sirolimus, not diphenoxylate. |
| PD | Cohen_2012 | not_relevant | 0 | 0 | The paper studies sirolimus, not diphenoxylate. |
| popPK | Coupar_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of opiate receptor effects on rat intestine, not a pharmacokinetic study, and reports no disposition parameters for diphenoxylate. |
| popPK | Ehrenpreis_1992 | irrelevant | 0 | 0 | The study focuses on D-xylose malabsorption in HIV patients, and diphenoxylate is only mentioned as a standard antidiarrheal therapy, with no pharmacokinetic parameters reported. |
| popPK | Estoup_1994 | irrelevant | 0 | 0 | The paper is a review of medication delivery methods and mentions diphenoxylate only as an example of a drug affecting motility, without reporting any pharmacokinetic parameters. |
| PD | Estoup_1994 | not_relevant | 0 | 0 | The text is a general review of medication delivery via enteral tubes and mentions diphenoxylate only in the context of its effect on motility and administration method, without providing any numeric PD parameters or exposure-response data. |
| popPK | Farmakides_1986 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Farmakides_1986 | not_relevant | 0 | 0 | The paper discusses the use of prostaglandins (PGE2 and PGF2 alpha) for pregnancy termination and does not mention diphenoxylate or report any pharmacodynamic parameters for it. |
| popPK | Geng_2015 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Geng_2015 | not_relevant | 0 | 0 | The paper investigates the effect of diphenoxylate on CYP450 enzyme activity (pharmacodynamics of enzyme inhibition), but it does not report a concentration-effect or dose-response relationship with numeric PD parameters (e.g., IC50, Emax) for a clinical or physiological endpoint; it is a mechanistic enzyme assay study, not a PK/PD modeling study. |
| PGx | Geng_2015 | not_relevant | 0 | 0 | The paper investigates the effect of diphenoxylate on CYP450 activity in rats, not the effect of a gene variant on diphenoxylate's PK/PD. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is a cost analysis of cancer symptom drugs and contains no pharmacokinetic data for diphenoxylate. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper is a financial analysis of drug costs and contains no pharmacokinetic, pharmacodynamic, or dose-response data. |
| popPK | Heel_1978 | irrelevant | 0 | 0 | The paper is a review of loperamide where diphenoxylate is only mentioned as a comparator, and no quantitative pharmacokinetic parameters for diphenoxylate are provided. |
| PD | Heel_1978 | not_relevant | 1 | 0 | The text is a qualitative review comparing loperamide and diphenoxylate without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Jameson_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etirinotecan pegol, not diphenoxylate. |
| PD | Jameson_2013 | not_relevant | 0 | 0 | The paper studies etirinotecan pegol, not diphenoxylate, and reports only PK and safety data without PD modeling. |
| popPK | Karim_1972 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| popPK | Khan_2019 | irrelevant | 0 | 0 | The paper is a clinical case report of toxicity and does not contain any quantitative pharmacokinetic parameters or models for diphenoxylate. |
| PD | Khan_2019 | not_relevant | 0 | 0 | The paper is a single case report of toxicity without any pharmacokinetic or pharmacodynamic modeling, concentration measurements, or numeric dose-response parameters. |
| popPK | Lauritsen_1990 | irrelevant | 2 | 0 | This is a review article that briefly discusses diphenoxylate but does not provide original quantitative pharmacokinetic parameter values in the provided text. |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is an abstract for a review article that mentions pharmacokinetic-pharmacodynamic relationships will be discussed, but it does not provide any specific numeric PD parameters or data for diphenoxylate. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study investigates bisacodyl, not diphenoxylate, and focuses on cyclodextrin inclusion and gastrointestinal transit rather than diphenoxylate PK parameters. |
| popPK | Mapa_1982 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of 15-methyl prostaglandin F2 alpha for abortion and does not report pharmacokinetic parameters for diphenoxylate. |
| PD | Mapa_1982 | not_relevant | 0 | 0 | The paper reports clinical outcomes for a prostaglandin, not diphenoxylate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Newton_1978 | irrelevant | 0 | 0 | The study evaluates the effect of Lomotil (diphenoxylate/atropine) on ileostomy output and transit time, but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Newton_1978 | not_relevant | 2 | 1 | The paper reports qualitative and statistical comparisons of ileostomy output changes for fixed doses of Lomotil (diphenoxylate/atropine) but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Nguyen_2012 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study focusing on Kv1.3 channel blockade (pharmacodynamics/mechanism) and does not report any pharmacokinetic parameters for diphenoxylate. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for diphenoxylate. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention diphenoxylate or report any pharmacodynamic parameters. |
| popPK | Ponzillo_1988 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Reynolds_1984 | irrelevant | 1 | 0 | The study focuses on the mechanism of action (calcium channel blockade) of loperamide, with diphenoxylate serving only as a comparator in binding assays, and no pharmacokinetic parameters are reported. |
| PD | Reynolds_1984 | not_relevant | 3 | 2 | The paper focuses on loperamide's mechanism (calcium channel blockade) and provides in vitro Ki/IC50 values and tissue concentrations for loperamide, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for diphenoxylate. |
| popPK | Sanvordeker_1975 | irrelevant | 1 | 0 | The study focuses on in vitro adsorption to charcoal and qualitative in vivo effects in mice, without reporting quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Uddin_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological properties of Clerodendrum infortunatum extracts and does not report pharmacokinetic parameters for diphenoxylate. |
| PD | Uddin_2026 | not_relevant | 0 | 0 | The paper studies Clerodendrum infortunatum extracts, not diphenoxylate, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Yin_2024 | irrelevant | 0 | 0 | Diphenoxylate is used only as a tool to induce a constipation model in rats, and the study focuses on the pharmacodynamics of Cistanche deserticola, not the pharmacokinetics of diphenoxylate. |
| PD | Yin_2024 | not_relevant | 0 | 0 | The paper uses diphenoxylate only to induce a constipation model in rats and does not report any pharmacodynamic or exposure-response analysis for diphenoxylate itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
