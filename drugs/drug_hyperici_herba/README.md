<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;Hyperici herba&quot;}]"></div>

# Hyperici herba

- **generic name:** Hyperici herba
- **ATC codes:** `N06AX25`
- **DrugBank:** [DB01323](https://go.drugbank.com/drugs/DB01323) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

St John's wort (Hypericum perforatum) flowering tops are used as a herbal antidepressant for mild to moderate depression. It is widely available as an over-the-counter herbal remedy and nutraceutical, and is approved in several countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q158289](https://www.wikidata.org/wiki/Q158289) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hyperforin | metabolite | 536.797 | C35H52O4 | PubChem | [441298](https://pubchem.ncbi.nlm.nih.gov/compound/441298) | Biber_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:13 | 2:07 | 0/0/1 | 0/0/0 | 0/0/0 | 69,071/13,413 | ollama / glm-5.3-flash | 3 | 2/0 | 1/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Biber_1998_reference](drugs/drug_hyperici_herba/HypericiHerba_Biber1998_reference.md) | — | 1-compartment (no model) | 5 | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry 31 Suppl (1998) | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hyperici_herba) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inducer/substrate, `CYP2D6` inhibitor, `CYP3A4` activator/inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` activator/inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 183 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Biber_1998.pdf` | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry 31 Suppl (1998) | popPK | 8 | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) | [9684946](https://pubmed.ncbi.nlm.nih.gov/9684946) | Reports numeric PK parameters (half-life, clearance, Cmax, tmax, MRT) for hyperforin from hypericum extract in both rats and humans, though no full compartmental model parameters (V, Q) are given. |
| `Staffeldt_1994.pdf` | Staffeldt B et al., Pharmacokinetics of hypericin and pseud…, Journal of geriatric psychi… (1994) | popPK | 8 | [10.1177/089198879400700113](https://doi.org/10.1177/089198879400700113) | [7857509](https://pubmed.ncbi.nlm.nih.gov/7857509) | Human PK study of hypericin/pseudohypericin from St. John's wort with numeric half-lives, lag times, Cmax, and AUC reported in the abstract, though no CL/V or compartmental model values. |

<sub>queue written 2026-10-06T23:11:57.798884+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Alahmad_2022 | not_relevant | 0 | 0 | The paper focuses on the chemical identification of constituents and their in vitro antioxidant activities, not on pharmacokinetic or pharmacodynamic modeling in biological systems. |
| popPK | Boyle_2024 | irrelevant | 0 | 0 | A nursing review discussing SJW pharmacokinetics qualitatively with no numeric PK parameters reported. |
| popPK | Cheng_2023 | irrelevant | 0 | 0 | A review of herb-drug interactions with no original PK parameter values for St. John's wort in the evidence. |
| PD | Dimpfel_1997 | not_relevant | 2 | 0 | The paper describes qualitative EEG changes (delta/alpha waves) and trends in discriminant analysis but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) that can be extracted. |
| popPK | Goey_2014 | irrelevant | 0 | 0 | Hyperici herba (St John's wort) is only the co-administered inducer; the PK parameters reported (CL, AUC, half-life) are for docetaxel, not for hyperici herba or its metabolites. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | This is a review of herbal-drug interactions; St John's wort appears only as a perpetrator affecting other drugs' concentrations, with no PK parameters for hypericin/hyperforin itself. |
| PD | Kladar_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and antioxidant assays for various Hypericum samples, but does not contain any pharmacokinetic (PK) data, exposure-response analysis, or pharmacodynamic (PD) modeling. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | Review of β-blocker drug interactions; hyperici_herba (St. John's wort) is only mentioned as an interacting herb, no PK parameters for it. |
| popPK | Mohammadinia_2018 | irrelevant | 2 | 1 | Hyperici herba is only a P-gp inducer modulating clearance of Tc-99-sestamibi, not the subject drug; no PK parameters for hyperici herba itself are reported. |
| popPK | Nicolussi_2020 | irrelevant | 1 | 0 | A review of SJW's interactions with OTHER drugs; no PK parameters for hyperici_herba itself and no numeric values present. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | Systematic review of warfarin interactions; St. John's Wort is only a listed interacting supplement with no PK parameters reported. |
| popPK | Wise_2019 | irrelevant | 3 | 2 | In silico prediction of phytochemical Tmax only; no clearance, volume, or compartmental PK parameters for hyperici_herba are reported, and no numeric parameter values beyond a Tmax range appear. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:11 UTC</sub>
