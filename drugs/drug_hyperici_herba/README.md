<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;Hyperici herba&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;HypericiHerba_Biber1998_reference&quot;,&quot;label&quot;:&quot;Biber_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hyperici_herba/HypericiHerba_Biber1998_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Hyperici herba

- **generic name:** Hyperici herba
- **ATC codes:** `N06AX25`
- **DrugBank:** [DB01323](https://go.drugbank.com/drugs/DB01323)
- **groups:** approved, investigational, nutraceutical

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 22:33 | 6:11 | 0/0/1 | 0/0/0 | 0/0/0 | 39,941/4,062 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 0/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Biber_1998_reference](drugs/drug_hyperici_herba/HypericiHerba_Biber1998_reference.md) | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry (1998) | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hyperici_herba) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inducer/substrate, `CYP2D6` inhibitor, `CYP3A4` activator/inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` activator/inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 183 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Biber_1998.pdf` | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry 31 Suppl (1998) | popPK | 9 | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) | [9684946](https://pubmed.ncbi.nlm.nih.gov/9684946) | The study reports quantitative PK parameters (half-life, clearance, MRT) for hyperforin from Hypericum extracts in humans and rats, with values explicitly stated in the text. |
| `Staffeldt_1994.pdf` | Staffeldt B et al., Pharmacokinetics of hypericin and pseud…, Journal of geriatric psychi… (1994) | popPK | 9 | [10.1177/089198879400700113](https://doi.org/10.1177/089198879400700113) | [7857509](https://pubmed.ncbi.nlm.nih.gov/7857509) | The study reports quantitative PK parameters (half-life, AUC, Cmax, lag time) for hypericin and pseudohypericin from Hypericum perforatum extract in humans. |
| `Alahmad_2022.pdf` | Alahmad A et al., Identification of Major Constituents of…, ACS omega (2022) | pd | 4 | [10.1021/acsomega.1c06335](https://doi.org/10.1021/acsomega.1c06335) | [35559140](https://www.ncbi.nlm.nih.gov/pubmed/35559140) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-23T22:31:47.840964+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Alahmad_2022 | not_relevant | 0 | 0 | The paper focuses on the chemical identification of constituents and their in vitro antioxidant activities, not on pharmacokinetic or pharmacodynamic modeling in biological systems. |
| popPK | Boyle_2024 | irrelevant | 2 | 0 | The paper is a nursing review discussing St. John's wort in cancer care and does not report original quantitative pharmacokinetic parameter values. |
| popPK | Cheng_2023 | irrelevant | 1 | 0 | The paper is a review of herb-drug interactions and does not report original quantitative pharmacokinetic parameters for hyperici_herba. |
| PD | Dimpfel_1997 | not_relevant | 2 | 0 | The paper describes qualitative EEG changes (delta/alpha waves) and trends in discriminant analysis but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) that can be extracted. |
| popPK | Goey_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of docetaxel (the subject drug) in the presence of St John's wort (hyperici_herba) as an interacting agent, rather than reporting PK parameters for hyperici_herba itself. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | The paper is a review of drug-herb interactions and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for hyperici_herba. |
| PD | Kladar_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and antioxidant assays for various Hypericum samples, but does not contain any pharmacokinetic (PK) data, exposure-response analysis, or pharmacodynamic (PD) modeling. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | The paper is a review of drug interactions involving adrenergic β-blockers, and St. John's wort (hyperici_herba) is only mentioned as a potential interacting herb without any quantitative PK parameters for it. |
| popPK | Mohammadinia_2018 | irrelevant | 0 | 0 | The study investigates the effect of St. John's Wort on the clearance of a radiotracer (Tc-MIBI), not the pharmacokinetic parameters of St. John's Wort itself. |
| popPK | Nicolussi_2020 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions where St. John's wort acts as an inducer of other drugs, not a study reporting quantitative PK parameters for hyperici_herba itself. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | The paper is a systematic review of warfarin interactions and does not report original quantitative pharmacokinetic parameters for hyperici_herba. |
| popPK | Wise_2019 | irrelevant | 2 | 0 | The study relies on in silico predictions of phytochemical absorption timing (Tmax) rather than reporting quantitative population pharmacokinetic parameters (CL, V, Q, ka) for the drug hyperici_herba. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 22:31 UTC</sub>
