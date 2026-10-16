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
| 2026-10-15 00:11 | 0:32 | 0/0/0 | 1/0/0 | 0/0/0 | 14,873/868 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Vidhya_2020_HNE](drugs/drug_troxerutin/pd_Vidhya_2020_HNE.md) | Elastase activity ← troxerutin · inhibition effect | — | Vidhya R et al., Anti-inflammatory effects of troxerutin…, Immunopharmacology and immu… (2020) | [10.1080/08923973.2020.1806870](https://doi.org/10.1080/08923973.2020.1806870) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pincemail_1988.pdf` | Pincemail J et al., Human myeloperoxidase activity is inhib…, Experientia (1988) | pd | 5 | [10.1007/BF01940544](https://doi.org/10.1007/BF01940544) | [2836234](https://www.ncbi.nlm.nih.gov/pubmed/2836234) | metadata signals extractable PD data (IC50) |
| `Vidhya_2020.pdf` | Vidhya R et al., Anti-inflammatory effects of troxerutin…, Immunopharmacology and immu… (2020) | pd | 5 | [10.1080/08923973.2020.1806870](https://doi.org/10.1080/08923973.2020.1806870) | [32762381](https://www.ncbi.nlm.nih.gov/pubmed/32762381) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T00:11:32.559377+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adam_2005 | not_relevant | 2 | 1 | The paper describes qualitative hepatoprotective effects and metabolic changes but does not provide numeric concentration-effect curves, Emax/EC50 parameters, or a formal PK/PD model for troxerutin. |
| PD | Bruppacher_1998 | not_relevant | 0 | 0 | The paper is a safety re-evaluation focusing on liver toxicity incidence and spontaneous reports, containing no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PGx | Burian_2003 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of coumarin and liver dysfunction, not the pharmacokinetic or pharmacodynamic parameters of troxerutin. |
| PD | Carlsson_1996 | not_relevant | 2 | 1 | The study reports qualitative fluorescence intensity differences between dose groups and controls but provides no numeric concentration-effect data, dose-response curve, or PD parameters (Emax, EC50, etc.). |
| PD | Casili_2021 | not_relevant | 1 | 0 | The text is an abstract describing a study on the therapeutic potential of flavonoids in CVI using in vitro, ex vivo, and in vivo models, but it does not report any specific numeric pharmacodynamic parameters (e.g., EC50, Emax) or exposure-response relationships for troxerutin. |
| popPK | Dittrich_1985 | irrelevant | 2 | 0 | The study describes an HPLC method and reports bioavailability, but provides no quantitative disposition parameters (CL, V, t1/2, ka) or compartmental model parameters in the evidence. |
| PD | Ibrahim_2020 | not_relevant | 1 | 0 | The study is a mechanistic investigation using a single fixed dose (150 mg/kg) and reports qualitative changes in biomarkers without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Jelnes_1986 | irrelevant | 0 | 0 | The study investigates hydroxyethylrutoside (a different drug) and reports hemodynamic effects (blood flow) rather than pharmacokinetic disposition parameters for troxerutin. |
| PD | Khattab_2015 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Kienzler_2002 | irrelevant | 1 | 0 | The study analyzes the pharmacokinetics of Venoruton (rutoside derivatives) rather than troxerutin, and no specific numeric values are provided in the evidence. |
| popPK | Manna_2026 | irrelevant | 0 | 0 | The paper is a narrative review of troxerutin's anticancer mechanisms and does not report original quantitative pharmacokinetic parameters or models. |
| PD | Sahu_2022 | not_relevant | 3 | 2 | Only qualitative dose-dependent reduction of arthritis scores with TXR doses (50/100/200 mg/kg) in rats; no concentration-effect data, no PD parameters (Emax/EC50/slope) reported or derivable. |
| popPK | Sunil_2019 | irrelevant | 0 | 0 | The paper is a review of taxifolin (dihydroquercetin), not a pharmacokinetic study of troxerutin. |
| PD | Tolba_2021 | not_relevant | 0 | 0 | This is an analytical chemistry paper (spectrofluorimetric quantification of troxerutin/DOB in formulations and spiked plasma); no pharmacodynamic or exposure-response relationship is reported. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a critical review of flavonoid drugs and does not report original quantitative pharmacokinetic parameters for troxerutin. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper is a critical review of flavonoid drug development and informatics analysis, containing no specific pharmacodynamic modeling, exposure-response data, or numeric PD parameters for troxerutin. |
| PD | Yang_2006 | not_relevant | 0 | 0 | The paper describes an electrochemical analytical method for detecting troxerutin, not a pharmacodynamic or exposure-response study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
