<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;spirapril&quot;}]"></div>

# spirapril

- **generic name:** spirapril
- **ATC codes:** `C09AA11`
- **DrugBank:** [DB01348](https://go.drugbank.com/drugs/DB01348) · **PubChem:** [CID 5311447](https://pubchem.ncbi.nlm.nih.gov/compound/5311447)
- **molar mass:** 466.614 g/mol (C22H30N2O5S2) — DrugBank
- **groups:** approved, investigational

## About

Spirapril is an ACE inhibitor used as an antihypertensive drug to treat high blood pressure. It is an approved medicine, but it does not appear to be widely marketed today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q835757](https://www.wikidata.org/wiki/Q835757) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| spirapril | parent | 466.614 | C22H30N2O5S2 | DrugBank | [5311447](https://pubchem.ncbi.nlm.nih.gov/compound/5311447) | Krähenbühl_1993 |
| spiraprilat | metabolite | 438.557 | C20H26N2O5S2 | PubChem | [3033702](https://pubchem.ncbi.nlm.nih.gov/compound/3033702) | Krähenbühl_1993 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:35 | 9:05 | 0/0/1 | 0/0/1 | 0/0/0 | 125,599/27,563 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 3/1 | 2/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q331, Q86 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Krähenbühl_1993_reference](drugs/drug_spirapril/Spirapril_Krhenbhl1993_reference.md) | — | parent + metabolite (no model) | 10 | Krähenbühl S et al., Pharmacokinetics and haemodynamic effec…, European journal of clinica… (1993) | [10.1007/BF00315391](https://doi.org/10.1007/BF00315391) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bellissant_1997_BBF](drugs/drug_spirapril/pd_Bellissant_1997_BBF.md) | brachial blood flow ← spiraprilat · direct sigmoid Emax (Hill) effect | — | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bellissant_1997_PCEA](drugs/drug_spirapril/pd_Bellissant_1997_PCEA.md) | plasma converting enzyme activity ← spiraprilat · direct sigmoid Emax (Hill) effect | — | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bellissant_1997_PCWP](drugs/drug_spirapril/pd_Bellissant_1997_PCWP.md) | pulmonary capillary wedge pressure ← spiraprilat · direct sigmoid Emax (Hill) effect | — | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=spirapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grass_1994.pdf` | Grass P et al., Spirapril: pharmacokinetic properties a…, Blood pressure. Supplement (1994) | popPK | 10 | not captured | [8061850](https://pubmed.ncbi.nlm.nih.gov/8061850) | The text explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for spirapril and its active metabolite spiraprilat. |
| `Meredith_1994.pdf` | Meredith PA et al., Pharmacokinetics of spirapril in renal…, Blood pressure. Supplement (1994) | popPK | 9 | not captured | [8061840](https://pubmed.ncbi.nlm.nih.gov/8061840) | The study reports quantitative PK parameters for spirapril and its metabolite in humans, but the specific numeric values are not present in the provided abstract text. |
| `Bellissant_1997.pdf` | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | popPK | 8 | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) | [9269955](https://pubmed.ncbi.nlm.nih.gov/9269955) | The study models the active metabolite spiraprilat (relevant as spirapril PK) but the provided evidence only contains pharmacodynamic parameters (Emax, EC50, Hill coefficients) and lacks specific quantitative PK parameters like clearance or volume of distribution. |
| `Haufe_1994.pdf` | Haufe CC et al., [Kidney function in hypertensive patien…, Medizinische Klinik (Munich… (1994) | popPK | 8 | not captured | [7968874](https://pubmed.ncbi.nlm.nih.gov/7968874) | The study reports a linear correlation between the total plasma clearance of the active metabolite spiraprilate and creatinine clearance, but specific numeric parameter values are not provided in the text. |
| `Stein_1994.pdf` | Stein G et al., Pharmacokinetics of spirapril and spira…, Blood pressure. Supplement (1994) | popPK | 8 | not captured | [8061846](https://pubmed.ncbi.nlm.nih.gov/8061846) | The study reports pharmacokinetic parameters for spirapril and its metabolite spiraprilat in humans, but the specific numeric values are not present in the provided abstract text. |
| `Sybertz_1987.pdf` | Sybertz EJ et al., Angiotensin converting enzyme inhibitor…, Archives internationales de… (1987) | pd | 4 | not captured | [3036028](https://www.ncbi.nlm.nih.gov/pubmed/3036028) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:27:50.923305+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellissant_1997 | relevant | 8 | 2 | The study models the active metabolite spiraprilat (relevant as spirapril PK) but the provided evidence only contains pharmacodynamic parameters (Emax, EC50, Hill coefficients) and lacks specific quantitative PK parameters like clearance or volume of distribution. |
| popPK | Ding_2000 | irrelevant | 0 | 0 | The paper is a review of ACE inhibitors in Chinese vs Caucasian populations, and spirapril is only mentioned in a clinical efficacy table (Table 4) without any pharmacokinetic parameter values. |
| PD | Ding_2000 | not_relevant | 3 | 2 | This is a narrative review of ACEI PK/PD differences between Chinese and Caucasians; no spirapril-specific concentration-effect or dose-response data with numeric PD parameters are reported. |
| PGx | Ding_2000 | not_relevant | 0 | 0 | The paper discusses ACE inhibitors in general (cilazapril, fosinopril, perindopril) and does not report data for spirapril. |
| popPK | Fischler_1999 | irrelevant | 2 | 0 | This is a review article that discusses spirapril's half-life (30 h) and elimination routes qualitatively but does not report quantitative population PK parameters like clearance or volume of distribution. |
| PD | Fischler_1999 | not_relevant | 1 | 0 | Narrative review of ACE inhibitors; only qualitative PK/PD comparisons (e.g., half-life 30 h for spirapril), no concentration-effect or dose-response data or PD parameters. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing for COVID-19 and does not contain any pharmacokinetic data for spirapril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Network-based drug repurposing algorithm; spirapril appears only as a predicted ACE-inhibitor candidate with no exposure-, dose-, or concentration-effect data or PD parameters. |
| popPK | Haas_2002 | irrelevant | 0 | 0 | The study focuses on the antiproteinuric and antihypertensive clinical effects of spirapril, not on its pharmacokinetic disposition parameters. |
| popPK | Haufe_1994 | relevant | 8 | 2 | The study reports a linear correlation between the total plasma clearance of the active metabolite spiraprilate and creatinine clearance, but specific numeric parameter values are not provided in the text. |
| popPK | Hossein-Nia_1992 | irrelevant | 2 | 0 | The paper describes the development and validation of radioimmunoassays for spirapril and spiraprilate, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Hossein-Nia_1992 | not_relevant | 2 | 1 | Paper describes radioimmunoassays and only qualitatively mentions relating plasma concentrations to ACE inhibition; no numeric PD parameters or effect-vs-concentration data are reported. |
| popPK | Iakusevich_2000 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting blood pressure and safety outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Jardine_1999 | irrelevant | 1 | 0 | The paper is a clinical review discussing the therapeutic use of spirapril in renal failure and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with spirapril serving only as a co-administered agent to test for drug interactions, and no PK parameters for spirapril are reported. |
| popPK | Meredith_1994 | relevant | 9 | 2 | The study reports quantitative PK parameters for spirapril and its metabolite in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Noble_1995 | irrelevant | 1 | 0 | The paper is a preliminary review of pharmacology and therapeutic efficacy that discusses qualitative clearance mechanisms but does not report quantitative pharmacokinetic parameter values (CL, V, t1/2). |
| PD | Noble_1995 | not_relevant | 3 | 2 | Review article describing only qualitative dose-response (flat 6–24 mg) with BP ranges; no concentration-effect data or numeric PD parameters derivable. |
| popPK | Nørgaard_1993 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure and renal outcomes, not a pharmacokinetic study reporting disposition parameters for spirapril. |
| popPK | Petersen_2001 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the effect of spirapril on renal function (GFR decline) and blood pressure, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Schürer_2003 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only relative confidence intervals for AUC and Cmax, with no absolute quantitative disposition parameters (CL, V, t1/2) provided in the evidence. |
| PD | Smith_1989 | not_relevant | 2 | 3 | This is a medicinal chemistry synthesis paper; the only numeric values are in vitro ACE IC50 (spiraprilat 0.8 nM) and animal dose ranges, not a concentration-effect or exposure-response PD relationship with derivable PD parameters (Emax/EC50/slope) in subjects. |
| popPK | Song_2002 | irrelevant | 1 | 0 | This is a review article that discusses spirapril qualitatively but does not provide specific quantitative pharmacokinetic parameter values (such as clearance or volume) in the text. |
| PD | Song_2002 | not_relevant | 2 | 1 | Review article only qualitatively notes ACE inhibitors (including spirapril) have flat dose-response curves, with no numeric PD parameters or effect-concentration data for spirapril. |
| popPK | Stein_1994 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for spirapril and its metabolite spiraprilat in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Stein_1994_2 | irrelevant | 0 | 0 | The study reports clinical efficacy and renal function parameters (GFR, RPF) but does not report pharmacokinetic disposition parameters (CL, V, t1/2) for spirapril. |
| popPK | Umemura_1992 | irrelevant | 0 | 0 | The study evaluates the effect of spirapril on left ventricular hypertrophy and hemodynamics in rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Umemura_1992 | not_relevant | 3 | 2 | Only a single fixed dose (10 mg/kg/day) with qualitative group comparisons and a rightward ANGI dose-response shift; no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration relationship reported. |
| popPK | Wittenberg_1994 | irrelevant | 0 | 0 | The study investigates renal function parameters (inulin and PAH clearance) rather than the pharmacokinetic disposition parameters (CL, V, ka) of spirapril itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:27 UTC</sub>
