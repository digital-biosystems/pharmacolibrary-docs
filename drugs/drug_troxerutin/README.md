<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;troxerutin&quot;}]"></div>

# troxerutin

- **generic name:** troxerutin
- **ATC codes:** `C05CA04`
- **DrugBank:** [DB13124](https://go.drugbank.com/drugs/DB13124) · **PubChem:** [CID 5486699](https://pubchem.ncbi.nlm.nih.gov/compound/5486699)
- **molar mass:** 742.6752 g/mol (C33H42O19) — DrugBank
- **groups:** investigational

## About

Troxerutin is a bioflavonoid capillary-stabilizing (vasoprotective) agent that has been used for vein and circulation problems such as chronic venous insufficiency and haemorrhoids. It is not an approved medicine in major Western markets; databases currently list it as investigational, though it remains available in some countries, often without prescription.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72515635](https://www.wikidata.org/wiki/Q72515635) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:53 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 14,873/576 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pincemail_1988.pdf` | Pincemail J et al., Human myeloperoxidase activity is inhib…, Experientia (1988) | pd | 5 | [10.1007/BF01940544](https://doi.org/10.1007/BF01940544) | [2836234](https://www.ncbi.nlm.nih.gov/pubmed/2836234) | metadata signals extractable PD data (IC50) |
| `Vidhya_2020.pdf` | Vidhya R et al., Anti-inflammatory effects of troxerutin…, Immunopharmacology and immu… (2020) | pd | 5 | [10.1080/08923973.2020.1806870](https://doi.org/10.1080/08923973.2020.1806870) | [32762381](https://www.ncbi.nlm.nih.gov/pubmed/32762381) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T22:53:18.292878+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adam_2005 | not_relevant | 2 | 1 | The paper describes qualitative hepatoprotective effects and metabolic changes but does not provide numeric concentration-effect curves, Emax/EC50 parameters, or a formal PK/PD model for troxerutin. |
| PD | Bruppacher_1998 | not_relevant | 0 | 0 | The paper is a safety re-evaluation focusing on liver toxicity incidence and spontaneous reports, containing no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PGx | Burian_2003 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of coumarin (CYP2A6 polymorphism and liver dysfunction), not troxerutin, and does not report PK/PD parameters for troxerutin. |
| PD | Carlsson_1996 | not_relevant | 2 | 1 | The study reports qualitative fluorescence intensity differences between dose groups and controls but provides no numeric concentration-effect data, dose-response curve, or PD parameters (Emax, EC50, etc.). |
| PD | Casili_2021 | not_relevant | 1 | 0 | The text is an abstract describing a study on the therapeutic potential of flavonoids in CVI using in vitro, ex vivo, and in vivo models, but it does not report any specific numeric pharmacodynamic parameters (e.g., EC50, Emax) or exposure-response relationships for troxerutin. |
| popPK | Dittrich_1985 | irrelevant | 2 | 0 | The paper describes an HPLC method and reports relative bioavailability, but does not provide quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Ibrahim_2020 | not_relevant | 1 | 0 | The study is a mechanistic investigation using a single fixed dose (150 mg/kg) and reports qualitative changes in biomarkers without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Jelnes_1986 | irrelevant | 0 | 0 | The study investigates hydroxyethylrutosides (a different drug) and reports hemodynamic effects (blood flow) rather than pharmacokinetic parameters for troxerutin. |
| PD | Khattab_2015 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Kienzler_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Venoruton (O-(beta-hydroxyethyl) rutosides), not troxerutin. |
| popPK | Manna_2026 | irrelevant | 0 | 0 | The paper is a review of anticancer mechanisms and does not report quantitative pharmacokinetic parameters for troxerutin. |
| PD | Sahu_2022 | not_relevant | 3 | 2 | Only qualitative dose-dependent reduction of arthritis scores with TXR doses (50/100/200 mg/kg) in rats; no concentration-effect data, no PD parameters (Emax/EC50/slope) reported or derivable. |
| popPK | Sunil_2019 | irrelevant | 0 | 0 | The paper is a review of taxifolin (dihydroquercetin), not troxerutin, and contains no quantitative pharmacokinetic parameters for troxerutin. |
| PD | Tolba_2021 | not_relevant | 0 | 0 | This is an analytical chemistry paper (spectrofluorimetric quantification of troxerutin/DOB in formulations and spiked plasma); no pharmacodynamic or exposure-response relationship is reported. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a critical review of flavonoid drugs and does not report original quantitative pharmacokinetic parameters for troxerutin. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper is a critical review of flavonoid drug development and informatics analysis, containing no specific pharmacodynamic modeling, exposure-response data, or numeric PD parameters for troxerutin. |
| PD | Yang_2006 | not_relevant | 0 | 0 | The paper describes an electrochemical analytical method for detecting troxerutin, not a pharmacodynamic or exposure-response study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
