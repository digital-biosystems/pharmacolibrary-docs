<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;diphenoxylate&quot;}]"></div>

# diphenoxylate

- **generic name:** diphenoxylate
- **ATC codes:** `A07DA01`
- **DrugBank:** [DB01081](https://go.drugbank.com/drugs/DB01081)
- **groups:** approved, illicit

## About

**Description.** A meperidine congener used as an antidiarrheal, usually in combination with atropine. At high doses, it acts like morphine. Its unesterified metabolite difenoxin has similar properties and is used similarly. It has little or no analgesic activity. This medication is classified as a Schedule V under the Controlled Substances Act by the Food and Drug Administration (FDA) and the DEA in the United States when used in preparations. When diphenoxylate is used alone, it is classified as a Schedule II.

**Indication.** For as adjunctive therapy in the management of diarrhea

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 04:04 | 4:18 | 0/0/0 | 0/0/0 | 0/0/0 | 70,091/3,518 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diphenoxylate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…Hepatic…”</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 32 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jackson_1987.pdf` | Jackson LS et al., The evaluation and application of a rad…, Journal of pharmacological… (1987) | popPK | 8 | [10.1016/0160-5402(87)90069-6](https://doi.org/10.1016/0160-5402(87)90069-6) | [3682841](https://pubmed.ncbi.nlm.nih.gov/3682841) | The study reports quantitative pharmacokinetic parameters (half-lives, Cmax, Tmax) for diphenoxylic acid, the major metabolite of diphenoxylate, in human plasma. |
| `Coupar_1994.pdf` | Coupar IM et al., Opiate and opiate antidiarrhoeal drug a…, Journal of autonomic pharma… (1994) | pd | 4 | [10.1111/j.1474-8673.1994.tb00591.x](https://doi.org/10.1111/j.1474-8673.1994.tb00591.x) | [8150811](https://www.ncbi.nlm.nih.gov/pubmed/8150811) | metadata signals extractable PD data (IC50) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Geng_2015.pdf` | Geng P et al., Effect of diphenoxylate on CYP450 isofo…, International journal of cl… (2015) | pgx | 7 | not captured | [26770498](https://www.ncbi.nlm.nih.gov/pubmed/26770498) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-22T04:03:56.481164+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armstrong_2009 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug-drug interactions (CYP3A4 inhibition/induction) and does not report pharmacogenomic effects of gene variants on diphenoxylate. |
| PGx | Baker_2007 | not_relevant | 0 | 0 | The paper reviews loperamide and does not report pharmacogenomic effects on diphenoxylate. |
| popPK | Cascinu_1993 | irrelevant | 0 | 0 | The study is a clinical trial comparing octreotide and loperamide for chemotherapy-induced diarrhea, with diphenoxylate mentioned only as a general background agent and no pharmacokinetic parameters reported. |
| PD | Cascinu_1993 | not_relevant | 0 | 0 | The paper compares octreotide and loperamide for treating chemotherapy-induced diarrhea and does not report any pharmacodynamic or exposure-response data for diphenoxylate. |
| popPK | Cohen_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sirolimus, not diphenoxylate. |
| PD | Cohen_2012 | not_relevant | 0 | 0 | The paper studies sirolimus, not diphenoxylate. |
| popPK | Coupar_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of opiate receptor effects on rat intestine, not a pharmacokinetic study, and reports no disposition parameters for diphenoxylate. |
| popPK | Ehrenpreis_1992 | irrelevant | 0 | 0 | The study focuses on D-xylose malabsorption in HIV patients and mentions diphenoxylate only as a standard antidiarrheal therapy, providing no pharmacokinetic parameters. |
| popPK | Estoup_1994 | irrelevant | 0 | 0 | The paper is a review on medication delivery methods and mentions diphenoxylate only as an example of a drug affecting motility, without reporting any pharmacokinetic parameters. |
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
| popPK | Lauritsen_1990 | irrelevant | 1 | 0 | The paper is a review article that discusses diphenoxylate only in the context of its clinical application, with specific pharmacokinetic details deferred to a separate Part II not included in the evidence. |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is an abstract for a review article that mentions pharmacokinetic-pharmacodynamic relationships will be discussed, but it does not provide any specific numeric PD parameters or data for diphenoxylate. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on bisacodyl, not diphenoxylate, and does not report pharmacokinetic parameters for the target drug. |
| popPK | Mapa_1982 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of 15-methyl prostaglandin F2 alpha for abortion and does not report pharmacokinetic parameters for diphenoxylate. |
| PD | Mapa_1982 | not_relevant | 0 | 0 | The paper reports clinical outcomes for a prostaglandin, not diphenoxylate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Newton_1978 | irrelevant | 0 | 0 | The study evaluates the effect of Lomotil (diphenoxylate/atropine) on ileostomy output and transit time, but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Newton_1978 | not_relevant | 2 | 1 | The paper reports qualitative and statistical comparisons of ileostomy output changes for fixed doses of Lomotil (diphenoxylate/atropine) but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Nguyen_2012 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study focusing on Kv1.3 channel blockade (pharmacodynamics/mechanism) and does not report any pharmacokinetic parameters for diphenoxylate. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review on radiomitigators for radiation injury and does not contain any pharmacokinetic data for diphenoxylate. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention diphenoxylate or report any pharmacodynamic parameters. |
| popPK | Ponzillo_1988 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Reynolds_1984 | irrelevant | 1 | 0 | The study focuses on the mechanism of action (calcium channel blockade) of loperamide, with diphenoxylate serving only as a comparator in binding assays, and no pharmacokinetic parameters are reported. |
| PD | Reynolds_1984 | not_relevant | 3 | 2 | The paper focuses on loperamide's mechanism (calcium channel blockade) and provides in vitro Ki/IC50 values and tissue concentrations for loperamide, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for diphenoxylate. |
| popPK | Sanvordeker_1975 | irrelevant | 1 | 0 | The study focuses on in vitro adsorption and qualitative in vivo effects, lacking quantitative pharmacokinetic parameters such as clearance or volume. |
| popPK | Uddin_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacological properties of Clerodendrum infortunatum extracts and does not report any pharmacokinetic parameters for diphenoxylate. |
| PD | Uddin_2026 | not_relevant | 0 | 0 | The paper studies Clerodendrum infortunatum extracts, not diphenoxylate, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Yin_2024 | irrelevant | 0 | 0 | Diphenoxylate is used only as a tool to induce a constipation model in rats, and the study focuses on the pharmacodynamics of Cistanche deserticola, not the pharmacokinetics of diphenoxylate. |
| PD | Yin_2024 | not_relevant | 0 | 0 | The paper uses diphenoxylate only to induce a constipation model in rats and does not report any pharmacodynamic or exposure-response analysis for diphenoxylate itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
