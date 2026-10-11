<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;besifloxacin&quot;}]"></div>

# besifloxacin

- **generic name:** besifloxacin
- **ATC codes:** `S01AE08`
- **DrugBank:** [DB06771](https://go.drugbank.com/drugs/DB06771) · **PubChem:** [CID 10178705](https://pubchem.ncbi.nlm.nih.gov/compound/10178705)
- **molar mass:** 393.84 g/mol (C19H21ClFN3O3) — DrugBank
- **groups:** approved

## About

Besifloxacin is a fluoroquinolone antibiotic used as an eye drop to treat bacterial eye infections. It is approved and used as an ophthalmological medicine, mainly in eye care settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3638978](https://www.wikidata.org/wiki/Q3638978) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:20 | 2:50 | 0/0/0 | 0/0/0 | 0/0/0 | 69,673/1,804 | einfracz / qwen3.8-27b | 6 | 0/4 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=besifloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 22 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gu_2016.pdf` | Gu XF et al., Rapid, sensitive and selective HPLC-MS/…, Journal of pharmaceutical a… (2016) | popPK | 10 | [10.1016/j.jpba.2015.08.023](https://doi.org/10.1016/j.jpba.2015.08.023) | [26340560](https://pubmed.ncbi.nlm.nih.gov/26340560) | The paper is a pharmacokinetic study of besifloxacin in rabbits, but the specific quantitative parameter values (CL, V, etc.) are not provided in the text, as the text focuses on the HPLC-MS/MS method validation. |
| `Kuang_2021.pdf` | Kuang L et al., A novel, sensitive, and widely accessib…, Journal of chromatography.… (2021) | popPK | 10 | [10.1016/j.jchromb.2021.123010](https://doi.org/10.1016/j.jchromb.2021.123010) | [34731742](https://pubmed.ncbi.nlm.nih.gov/34731742) | The paper reports quantitative PK parameters (Cmax, AUC, t1/2) for besifloxacin in a dose-intense ocular study. |
| `Proksch_2009.pdf` | Proksch JW et al., Ocular pharmacokinetics of besifloxacin…, Journal of ocular pharmacol… (2009) | popPK | 8 | [10.1089/jop.2008.0116](https://doi.org/10.1089/jop.2008.0116) | [19492955](https://pubmed.ncbi.nlm.nih.gov/19492955) | The study reports PK parameters (Cmax, AUC, half-life) for besifloxacin, but detailed compartmental clearance/volume values are not explicitly provided in the text evidence. |
| `Proksch_2010.pdf` | Proksch JW et al., Ocular pharmacokinetics/pharmacodynamic…, Journal of ocular pharmacol… (2010) | popPK | 8 | [10.1089/jop.2010.0054](https://doi.org/10.1089/jop.2010.0054) | [20874668](https://pubmed.ncbi.nlm.nih.gov/20874668) | The study reports ocular PK/PD parameters (AUC/MIC ratios, Cmax, Tmax) for besifloxacin in rabbits, but specific numeric values for Cmax and AUC are mostly described qualitatively or as ratios, with detailed PK table data likely in figures not fully provided here. |
| `Glogowski_2012.pdf` | Glogowski S et al., The use of the African green monkey as…, Journal of ocular pharmacol… (2012) | popPK | 6 | [10.1089/jop.2011.0164](https://doi.org/10.1089/jop.2011.0164) | [22235843](https://pubmed.ncbi.nlm.nih.gov/22235843) | The paper describes a preclinical PK study in monkeys with qualitative comparisons of concentrations, but the specific quantitative parameters (like CL, V, ka) are not numerically reported in the provided text. |
| `Silverstein_2011.pdf` | Silverstein BE et al., Efficacy and tolerability of besifloxac…, Clinical therapeutics (2011) | pd | 5 | [10.1016/j.clinthera.2010.12.004](https://doi.org/10.1016/j.clinthera.2010.12.004) | [21397770](https://www.ncbi.nlm.nih.gov/pubmed/21397770) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07T18:19:48.113257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Glogowski_2012 | relevant | 6 | 2 | The paper describes a preclinical PK study in monkeys with qualitative comparisons of concentrations, but the specific quantitative parameters (like CL, V, ka) are not numerically reported in the provided text. |
| popPK | Gu_2016 | relevant | 10 | 0 | The paper is a pharmacokinetic study of besifloxacin in rabbits, but the specific quantitative parameter values (CL, V, etc.) are not provided in the text, as the text focuses on the HPLC-MS/MS method validation. |
| popPK | Koulenti_2019 | irrelevant | 0 | 0 | The paper is a general review of novel Gram-positive antibiotics that mentions besifloxacin only in the introductory list of agents, providing no quantitative pharmacokinetic parameters or data for it. |
| popPK | Mah_2016 | irrelevant | 2 | 3 | The paper is a review that reports only local ocular PK parameters (tear/conjunctival Cmax, Tmax, AUC, half-life) and does not report systemic population PK parameters such as clearance, volume of distribution, or intercompartmental clearance for besifloxacin. |
| popPK | Mahvan_2014 | irrelevant | 0 | 0 | This is a clinical review of efficacy and safety in bacterial conjunctivitis, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Proksch_2009 | relevant | 8 | 4 | The study reports PK parameters (Cmax, AUC, half-life) for besifloxacin, but detailed compartmental clearance/volume values are not explicitly provided in the text evidence. |
| popPK | Proksch_2010 | relevant | 8 | 2 | The study reports ocular PK/PD parameters (AUC/MIC ratios, Cmax, Tmax) for besifloxacin in rabbits, but specific numeric values for Cmax and AUC are mostly described qualitatively or as ratios, with detailed PK table data likely in figures not fully provided here. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
