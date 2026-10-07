<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;isocarboxazid&quot;}]"></div>

# isocarboxazid

- **generic name:** isocarboxazid
- **ATC codes:** `N06AF01`
- **DrugBank:** [DB01247](https://go.drugbank.com/drugs/DB01247) · **PubChem:** [CID 3759](https://pubchem.ncbi.nlm.nih.gov/compound/3759)
- **molar mass:** 231.2505 g/mol (C12H13N3O2) — DrugBank
- **groups:** approved

## About

Isocarboxazid is a non-selective monoamine oxidase inhibitor antidepressant used to treat depression and neurotic disorders. It remains an approved medicine but is rarely used, mainly when other antidepressants have failed, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409595](https://www.wikidata.org/wiki/Q409595) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:23 | 0:22 | 0/0/0 | 1/0/0 | 0/0/0 | 7,151/708 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmad_2012_GUS](drugs/drug_isocarboxazid/pd_Ahmad_2012_GUS.md) | bacterial β-glucuronidase (GUS) activity ← isocarboxazid · inhibition effect | — | Ahmad S et al., Potential repurposing of known drugs as…, Journal of biomolecular scr… (2012) | [10.1177/1087057112444927](https://doi.org/10.1177/1087057112444927) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmad_2012_GUS_2](drugs/drug_isocarboxazid/pd_Ahmad_2012_GUS_2.md) | endogenous GUS activity in living intact Escherichia coli ← isocarboxazid · inhibition effect | — | Ahmad S et al., Potential repurposing of known drugs as…, Journal of biomolecular scr… (2012) | [10.1177/1087057112444927](https://doi.org/10.1177/1087057112444927) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isocarboxazid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `el-Kommos_1988.pdf` | el-Kommos ME, Spectrophotometric determination of iso…, Journal - Association of Of… (1988) | pd | 4 | not captured | [3240968](https://www.ncbi.nlm.nih.gov/pubmed/3240968) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T23:23:54.171070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition (IC50) values for isocarboxazid, not pharmacokinetic disposition parameters. |
| popPK | Das_2026 | irrelevant | 0 | 0 | The study is an in-vitro and computational investigation of a metabolite, using isocarboxazid only as a reference compound for molecular docking, with no pharmacokinetic parameters reported. |
| PD | Das_2026 | not_relevant | 0 | 0 | The paper focuses on D-(-)-ribofuranose; isocarboxazid is used only as a reference compound in molecular docking, with no PD or exposure-response data reported for it. |
| PGx | Larsen_2015 | not_relevant | 2 | 3 | Only a qualitative statement that isocarboxazid is not metabolized via CYP2D6; no gene variant effect on a PK/PD parameter is reported. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | This is a Cochrane review of ivermectin for COVID-19 efficacy/safety, with no isocarboxazid PK parameters reported. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacodynamic or exposure-response data for isocarboxazid. |
| popPK | Preskorn_1993 | irrelevant | 0 | 0 | The paper is a clinical review discussing antidepressant classes in the elderly and does not report quantitative pharmacokinetic parameters for isocarboxazid. |
| PD | Preskorn_1993 | not_relevant | 1 | 0 | The text is a general review of antidepressants in the elderly that mentions isocarboxazid only as an example of an MAOI class, without providing any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for the drug. |
| popPK | Safferman_1992 | irrelevant | 0 | 0 | The paper is a case report on CNS toxicity following an MAOI switch and does not report any quantitative pharmacokinetic parameters for isocarboxazid. |
| PD | Safferman_1992 | not_relevant | 0 | 0 | The paper is a qualitative case report of adverse CNS toxicity following an MAOI switch and does not provide any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Tyacke_2018 | irrelevant | 1 | 1 | Isocarboxazid is only a blocking/pretreatment agent in a PET radioligand study of 11C-BU99008; no PK parameters of isocarboxazid itself are reported. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | This is a text-mining/NLP methods paper about DDI extraction, not a pharmacokinetic study of isocarboxazid; no PK parameters appear. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for extracting drug-drug interactions from text and does not contain any pharmacodynamic data or analysis for isocarboxazid. |
| popPK | el-Kommos_1988 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | el-Kommos_1988 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying isocarboxazid, not a pharmacodynamic or exposure-response study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
