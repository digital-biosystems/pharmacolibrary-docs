<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinflunine&quot;}]"></div>

# vinflunine

- **generic name:** vinflunine
- **ATC codes:** `L01CA05`
- **DrugBank:** [DB11641](https://go.drugbank.com/drugs/DB11641)
- **groups:** approved, investigational

## About

**Description.** Vinflunine is a third-generation member of the vinca alkaloid family with anti-tumour actions. It was first described in 1998 at the Pierre Fabre research center in France. Like other vinca agents, vinflunine is an anti-mitotic agent that induces a cell cycle arrest at the G2/M phase and promotes cell death via apoptosis [L1396]. Vinflunine is a microtubule inhibitor that binds to tubulin at or near to the vinca binding sites to inhibits its polymerization into microtubules during cell proliferation [L1396]. In murine tumors and human tumor xenografts, vinflunine exhibits an antitumor efficacy than [DB00361], [DB00570], and [DB00541] [A31975]. 

Having an incidence of 429,700 new cases per year worldwide, urothelial carcinoma of the bladder is one of the most common malignancies that mostly affects individuals aged 50–79 years [A32626]. Some patients with advanced urothelial carcinoma experience inadequate therapeutic response from a prior platinum-containing regimen. While these patients have a median survival of approximately 4 months and a poor prognosis [L1396], there is currently no standard therapy in patients with advanced urothelial carcinoma [A32626]. In 2009, vinflunine was approved by the European Medicines Agency (EMA) as a second-line therapy of metastatic and advanced urothelial cancer after failure of platinum-based treatment [A32626]. Vinflunine ditartrate is an active ingredient in the EMA-authorised product Javlor for intravenous infusion. Efficacy and safety of vinflunine has not been studied in patients with performance status of 2 or less. The clinical use of vinflunine in other urologic malignancies, such as inoperable cancer of the penis, are currently have been investigated [A32626].

**Indication.** For use as a monotherapy in adults with advanced or transitional cell carcinoma of the urothelial tract after failure of a prior platinum-containing therapy [L2381].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 23:12 | 6:31 | 0/0/0 | 0/0/0 | 0/0/0 | 34,830/2,092 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vinflunine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Fecal excretion accounts for 2/3 of the total elimination of vinf…”</sub> | prose |
| excretion | kidney | <sub>“…olites and the remaining 1/3 of their elimination indicates urinary excretion [L2381].…”</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (substrate), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schmitt_2018.pdf` | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) | [29341179](https://pubmed.ncbi.nlm.nih.gov/29341179) | The paper is a population PK study for vinflunine, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, which only contains abstract-level summaries and toxicity risk percentages. |
| `Chan_2014.pdf` | Chan S et al., A phase I clinical and pharmacokinetic…, Cancer chemotherapy and pha… (2014) | popPK | 8 | [10.1007/s00280-014-2420-1](https://doi.org/10.1007/s00280-014-2420-1) | [24627219](https://pubmed.ncbi.nlm.nih.gov/24627219) | The paper describes a population PK study for vinflunine, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Delord_2013.pdf` | Delord JP et al., Phase I and pharmacokinetic study of IV…, Investigational new drugs (2013) | pgx | 7 | [10.1007/s10637-012-9878-7](https://doi.org/10.1007/s10637-012-9878-7) | [22996801](https://www.ncbi.nlm.nih.gov/pubmed/22996801) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T23:11:31.946442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell lines and does not report pharmacokinetic parameters for vinflunine. |
| PGx | Bamias_2021 | not_relevant | 0 | 0 | The study investigates the association between ERCC1 polymorphism and survival outcomes (CSS, PFS, OS) in patients treated with platinum-based chemotherapy, with vinflunine mentioned only as a concurrent therapy in a subset of patients, but no PK or PD parameters of vinflunine are reported. |
| popPK | Bonfil_2002 | irrelevant | 0 | 0 | The paper is an in-vivo efficacy and toxicity study in mice that reports tumor incidence and survival data, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for vinflunine. |
| popPK | Chan_2014 | relevant | 8 | 0 | The paper describes a population PK study for vinflunine, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Delord_2013 | not_relevant | 0 | 0 | The study investigates the impact of liver dysfunction (a clinical condition) on pharmacokinetics, not the effect of a specific gene variant or genotype. |
| popPK | Erjala_2005 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Estève_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance and does not report pharmacokinetic parameters. |
| popPK | Friberg_2002 | irrelevant | 2 | 0 | The paper focuses on a pharmacodynamic model of myelosuppression rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for vinflunine. |
| popPK | Kerioui_2022 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of tumor dynamics and survival in urothelial carcinoma, not a pharmacokinetic study, and reports no PK parameters for vinflunine. |
| PD | Kerioui_2022 | not_relevant | 0 | 0 | The paper analyzes tumor dynamics and survival for atezolizumab and chemotherapy, but does not report any pharmacodynamic or exposure-response relationship for vinflunine. |
| popPK | Kruczynski_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on tubulin binding and cytotoxicity, containing no pharmacokinetic parameters. |
| popPK | Matsubara_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing erdafitinib to chemotherapy (including vinflunine) and does not report any pharmacokinetic parameters for vinflunine. |
| PD | Matsubara_2025 | not_relevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of erdafitinib versus chemotherapy (including vinflunine) and does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for vinflunine. |
| PGx | Ng_2011 | not_relevant | 0 | 0 | The paper is a general review of vinflunine's pharmacology and clinical trials, with no mention of gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Ngan_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on microtubule dynamics and cell proliferation, reporting no pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Pourroy_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis in neuroblastoma cells and does not report any pharmacokinetic parameters for vinflunine. |
| popPK | Schmitt_2018 | relevant | 10 | 2 | The paper is a population PK study for vinflunine, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, which only contains abstract-level summaries and toxicity risk percentages. |
| PGx | Vallo_2015 | not_relevant | 0 | 0 | The paper reports drug sensitivity in cell lines and transporter expression, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of vinflunine. |
| PGx | Zhao_2007 | not_relevant | 0 | 0 | The paper investigates the metabolic pathway of vinflunine and identifies CYP3A4 as the major enzyme involved, but it does not report any pharmacogenomic effects (e.g., specific gene variants or genotypes) on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
