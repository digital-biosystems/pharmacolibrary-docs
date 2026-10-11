<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone butyrate&quot;}]"></div>

# hydrocortisone butyrate

- **generic name:** hydrocortisone butyrate
- **ATC codes:** `D07AB02`, `D07BB04`
- **DrugBank:** [DB14540](https://go.drugbank.com/drugs/DB14540) · **PubChem:** not captured
- **molar mass:** 432.557 g/mol (C25H36O6) — DrugBank
- **groups:** approved, vet_approved

## About

Hydrocortisone butyrate is a moderately potent topical corticosteroid used to treat inflammatory skin conditions. It is an approved medicine, also approved for veterinary use, and is applied to the skin as a dermatological preparation, sometimes combined with antiseptics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5954738](https://www.wikidata.org/wiki/Q5954738) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:27 | 6:27 | 0/0/0 | 0/1/0 | 0/0/0 | 194,386/1,832 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Tapfumaneyi_2022_skin_blanching](drugs/drug_hydrocortisone_butyrate/pd_Tapfumaneyi_2022_skin_blanching.md) | skin blanching ← hydrocortisone butyrate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the Ema…, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydrocortisone_butyrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown, `ABCG2` unknown, `SLCO1A2` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown, `ABCG2` unknown | DrugBank actor |
| absorption | mammary gland | `ABCG2` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` unknown, `ABCG2` unknown, `SLCO1A2` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown, `ABCG2` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inducer, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` unknown | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adrenal gland | `CYP11B1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ANXA1 (target), CYP11B2 (substrate), HSD11B2 (inhibitor), HSD3B1 (inhibitor), NR3C1 (target), SERPINA6 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7583 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tapfumaneyi_2022.pdf` | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the Ema…, Molecular pharmaceutics (2022) | pd | 4 | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) | [35763717](https://www.ncbi.nlm.nih.gov/pubmed/35763717) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T23:24:48.544463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric model development using simulated data and warfarin, with no mention of hydrocortisone_butyrate. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban, not hydrocortisone butyrate. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for belantamab mafodotin, not hydrocortisone butyrate. |
| popPK | Hofman_2006 | irrelevant | 0 | 0 | The study is an immunological trial comparing tacrolimus and hydrocortisone butyrate for atopic dermatitis, reporting immune response rates rather than pharmacokinetic parameters. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not hydrocortisone_butyrate. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper describes an LLM tool for PK modeling using warfarin, theophylline, and tobramycin datasets, and does not contain any data for hydrocortisone_butyrate. |
| popPK | Nemoto_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of CIM331, and hydrocortisone butyrate is only mentioned as a concomitant topical therapy whose usage decreased. |
| popPK | Oiso_2013 | irrelevant | 0 | 0 | The paper is a case report on vitiligo repigmentation and does not contain any pharmacokinetic data for hydrocortisone butyrate. |
| popPK | Piérard-Franchimont_1999 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing topical corticosteroids for seborrheic dermatitis and does not report pharmacokinetic parameters. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ocrelizumab, not hydrocortisone_butyrate. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of topical corticosteroid potency using vasoconstrictor assays, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Turnbull_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for scalp dermatitis and does not report any pharmacokinetic parameters for hydrocortisone butyrate. |
| popPK | Veien_1984 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing therapeutic outcomes in children, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for infliximab, not hydrocortisone_butyrate. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not hydrocortisone butyrate. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological case study using simulated data from a generic Monolix demo project (Oral1) to demonstrate uncertainty quantification metrics, and does not report pharmacokinetic parameters for hydrocortisone_butyrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
