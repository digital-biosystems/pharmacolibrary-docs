<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;ixabepilone&quot;}]"></div>

# ixabepilone

- **generic name:** ixabepilone
- **ATC codes:** `L01DC04`
- **DrugBank:** [DB04845](https://go.drugbank.com/drugs/DB04845) · **PubChem:** [CID 6445540](https://pubchem.ncbi.nlm.nih.gov/compound/6445540)
- **molar mass:** 506.7 g/mol (C27H42N2O5S) — DrugBank
- **groups:** approved, investigational

## About

Ixabepilone is a cancer medicine used to treat certain forms of advanced breast cancer. It is approved in the United States, where it is used in specialised oncology care, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q11711607](https://www.wikidata.org/wiki/Q11711607) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:15 | 5:02 | 0/0/0 | 2/1/0 | 0/0/0 | 24,492/7,746 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mani_2007_MBF](drugs/drug_ixabepilone/pd_Mani_2007_MBF.md) | percentage of PBMCs with MBF ← ixabepilone · direct sigmoid Emax (Hill) effect | — | Mani S et al., Peripheral blood mononuclear and tumor…, Annals of oncology : offici… (2007) | [10.1093/annonc/mdl315](https://doi.org/10.1093/annonc/mdl315) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehrotra_2017_CIPN](drugs/drug_ixabepilone/pd_Mehrotra_2017_CIPN.md) | CIPN ← ixabepilone · model not identified | — | Mehrotra S et al., Kinetic-Pharmacodynamic Model of Chemot…, The AAPS journal (2017) | [10.1208/s12248-017-0101-9](https://doi.org/10.1208/s12248-017-0101-9) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Goel_2008_microtubule_bundle_formation_in_peripheral_blood_mononuclear_cells](drugs/drug_ixabepilone/pd_Goel_2008_microtubule_bundle_formation_in_peripheral_blood_m.md) | microtubule bundle formation in peripheral blood mononuclear cells ← ixabepilone · direct sigmoid Emax (Hill) effect | — | Goel S et al., The effect of ketoconazole on the pharm…, Clinical cancer research :… (2008) | [10.1158/1078-0432.CCR-07-4151](https://doi.org/10.1158/1078-0432.CCR-07-4151) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ixabepilone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TUBB3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yardley_2009.pdf` | Yardley DA, Proactive management of adverse events…, The oncologist (2009) | pgx | 7 | [10.1634/theoncologist.2008-0284](https://doi.org/10.1634/theoncologist.2008-0284) | [19411315](https://www.ncbi.nlm.nih.gov/pubmed/19411315) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T18:14:14.183419+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Fountzilas_2013 | not_relevant | 0 | 0 | Genetic markers were assessed for association with response and toxicity, but none was associated with these outcomes; no ixabepilone pharmacokinetic or pharmacodynamic parameter was reported. |
| PGx | Genovesi_2021 | not_relevant | 0 | 0 | The paper evaluates ixabepilone’s antitumour activity in medulloblastoma models but does not report a gene-related change in an ixabepilone pharmacokinetic or pharmacodynamic parameter. |
| popPK | Goel_2008 | irrelevant | 3 | 2 | The human interaction study reports a 79% AUC increase but no quantitative clearance, volume, or compartmental/population-PK parameters. |
| PGx | Goel_2008 | not_relevant | 0 | 0 | Ketoconazole drug interaction effects are reported, but no gene variant, genotype, or phenotype effect on ixabepilone PK or PD is assessed. |
| popPK | Jain_2026 | irrelevant | 0 | 0 | This study predicts drug-combination synergy and reports no ixabepilone pharmacokinetic parameters. |
| PGx | Lee_2008 | not_relevant | 0 | 0 | The text mentions MDR1 expression and tubulin mutations in relation to antitumor activity, but reports no pharmacogenomic effect on an ixabepilone PK or PD parameter. |
| PGx | Lee_2016 | not_relevant | 1 | 1 | Reports associations between pathway mutations and ixabepilone activity in cell lines, not effects on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Mani_2007 | irrelevant | 1 | 0 | The study reports a pharmacodynamic EC50 but no quantitative ixabepilone disposition parameters. |
| popPK | Mehrotra_2017 | irrelevant | 1 | 0 | The study models dose-related neuropathy, not ixabepilone disposition, and reports no quantitative PK parameters. |
| PGx | Nobili_2012 | not_relevant | 0 | 0 | The review discusses P-glycoprotein-mediated tumor drug resistance but does not report a gene variant, genotype, or phenotype effect on an ixabepilone PK or PD parameter. |
| popPK | Peterson_2005 | irrelevant | 3 | 4 | Numeric Cmax, half-life, and AUC are reported, but no qualifying disposition parameters or quantitative compartmental model are provided. |
| PGx | Rashkin_2019 | not_relevant | 0 | 0 | The study predicts progression-free survival from genetic data but does not report a genotype effect on an ixabepilone pharmacokinetic or pharmacodynamic parameter. |
| popPK | Vishnu_2012 | irrelevant | 0 | 0 | This is an in-vitro antitumor mechanism study and reports no ixabepilone disposition parameters. |
| PGx | Yardley_2009 | not_relevant | 0 | 0 | The paper addresses adverse-event management and reports no genotype- or phenotype-associated ixabepilone PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
