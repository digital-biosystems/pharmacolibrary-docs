<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;semustine&quot;}]"></div>

# semustine

- **generic name:** semustine
- **ATC codes:** `L01AD03`
- **DrugBank:** [DB13647](https://go.drugbank.com/drugs/DB13647) · **PubChem:** not captured
- **groups:** investigational

## About

Semustine (MeCCNU) is a nitrosourea alkylating agent that has been investigated as an anticancer drug. It is not an approved medicine and remains investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1230937](https://www.wikidata.org/wiki/Q1230937) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:20 | 0:44 | 0/0/0 | 0/0/0 | 0/0/0 | 29,750/2,098 | einfracz / qwen3.8-27b | 4 | 1/4 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 43 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bethune_1999.pdf` | Bethune C et al., Lipid association increases the potency…, Pharmaceutical research (1999) | popPK | 10 | [10.1023/a:1018886321917](https://doi.org/10.1023/a:1018886321917) | [10397611](https://pubmed.ncbi.nlm.nih.gov/10397611) | The study reports quantitative pharmacokinetic parameters (AUC and terminal half-life) for semustine (CCNU) in rats. |
| `Diksic_1984.pdf` | Diksic M et al., Pharmacokinetics of positron-labeled 1,…, Cancer research (1984) | popPK | 9 | not captured | [6609769](https://pubmed.ncbi.nlm.nih.gov/6609769) | The paper describes a PK study of BCNU (analog to semustine) in humans and reports qualitative findings on clearance, but specific numeric parameter values are not provided in the evidence. |

<sub>queue written 2026-10-07T16:20:23.149555+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Agarwal_2015 | not_relevant | 2 | 2 | The paper reports in vitro DNA binding constants (Ka) and spectroscopic data, which are physicochemical binding parameters, not pharmacodynamic (exposure-response) parameters like Emax or EC50 for a biological effect. |
| popPK | Ahmed_1987 | irrelevant | 0 | 0 | The paper investigates the mechanism of CCNU (lomustine) hepatotoxicity, not semustine, and does not report pharmacokinetic parameters. |
| popPK | Bartzatt_2012 | irrelevant | 0 | 0 | The study is an in silico molecular design and pattern recognition analysis of novel compounds, reporting no pharmacokinetic disposition parameters for semustine. |
| popPK | Bateman_1980 | irrelevant | 0 | 0 | The paper is an in vitro chemosensitivity study, not a pharmacokinetic study, and does not report quantitative disposition parameters for semustine. |
| popPK | Boice_1986 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| popPK | Caddy_1982 | irrelevant | 3 | 0 | The paper is a method development study for methyl-CCNU (a distinct analog of semustine), not semustine itself, and reports no quantitative PK parameter values for semustine. |
| popPK | Chlebowski_1981 | irrelevant | 0 | 0 | The study reports pharmacokinetics for Adriamycin and its metabolite adriamycinol in patients co-administered with methyl-CCNU (semustine), but does not report quantitative PK parameters for semustine itself. |
| popPK | Diksic_1984 | relevant | 9 | 1 | The paper describes a PK study of BCNU (analog to semustine) in humans and reports qualitative findings on clearance, but specific numeric parameter values are not provided in the evidence. |
| popPK | El-Yazigi_1988 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for BCNU and CCNU, not semustine (MeCCNU). |
| popPK | Ercan_1980 | irrelevant | 1 | 2 | The study focuses on the biodistribution of 99mTc-Methyl-CCNU for renal imaging, not the systemic pharmacokinetics of semustine itself. |
| PD | Frytak_1979 | not_relevant | 0 | 0 | The paper evaluates the antiemetic efficacy of THC in patients receiving semustine, but it does not report any pharmacodynamic or exposure-response relationship for semustine itself. |
| popPK | Fulton_1984 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of radiation therapy combined with misonidazole in glioma patients and does not report any pharmacokinetic parameters for semustine. |
| popPK | Goddard_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitozolomide, not semustine. |
| popPK | Hartley-Asp_1988 | irrelevant | 0 | 0 | The study investigates tauromustine (TCNU), a different nitrosourea, not semustine. |
| PD | He_2017 | not_relevant | 3 | 2 | The paper reports a qualitative ranking of drug activity and mentions IC50 values from MTT assays, but does not provide the specific numeric PD parameters or concentration-effect curves for semustine in the text. |
| PD | Hill_1982 | not_relevant | 0 | 0 | The paper reports qualitative survival outcomes and optimal dosing schedules for drug combinations in mice, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for semustine. |
| popPK | Kramer_1985 | irrelevant | 0 | 0 | The study focuses on the nephrotoxicity mechanism and glutathione levels of MeCCNU, a different nitrosourea drug, rather than reporting pharmacokinetic parameters for semustine. |
| popPK | Kramer_1986 | irrelevant | 1 | 0 | The study focuses on the relationship between hepatic metabolism and renal toxicity of MeCCNU (a nitrosourea distinct from semustine), reporting on covalent binding and toxicity mechanisms rather than quantitative pharmacokinetic parameters for semustine. |
| PD | Kraus_1994 | not_relevant | 0 | 0 | The text is a clinical review of adjuvant therapy outcomes and does not contain any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for semustine. |
| popPK | Lee_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CCNU (cyclophosphamide/nitrosourea), not semustine, which is a different drug. |
| popPK | Lee_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lomustine (CCNU), not semustine (Me-CCNU). |
| popPK | Levin_1979 | irrelevant | 0 | 0 | The paper studies BCNU (carmustine), not semustine, and focuses on the effect of phenobarbital on BCNU pharmacokinetics in rats. |
| popPK | Lim_2026 | irrelevant | 0 | 0 | The study is a population-based cohort analysis of cancer risks associated with various IARC Group 1 pharmaceuticals and contains no pharmacokinetic data for semustine. |
| PD | Lim_2026 | not_relevant | 0 | 0 | The paper is a population-based epidemiological cohort study analyzing cancer risk associated with drug use; it does not report pharmacodynamic (exposure-response) or dose-response relationships for semustine, nor does it provide numeric PD parameters. |
| popPK | Madajewicz_1980 | irrelevant | 0 | 0 | The study reports clinical efficacy and toxicity of MeCCNU (a different drug from semustine) in prostate cancer patients, with no pharmacokinetic parameters measured or reported. |
| PD | Narisawa_1978 | not_relevant | 0 | 0 | The paper studies ACNU, Me-CCNU, and 5-FU, but does not mention semustine or provide any numeric pharmacodynamic parameters. |
| popPK | Paul_1982 | irrelevant | 0 | 0 | The paper is an immunological study investigating the effect of alkylating agents (including MeCCNU/semustine) on suppressor cell activity in mice, containing no pharmacokinetic data. |
| PD | Paul_1982 | not_relevant | 0 | 0 | The paper studies the effect of various alkylating agents (including CCNU/MeCCNU) on immunological suppressor cells but does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters for semustine. |
| popPK | Rachkova_1991 | irrelevant | 0 | 0 | The study investigates the in-vitro effect of nitrosoureas on tyrosinase enzyme activity, not the pharmacokinetics of semustine. |
| popPK | Roberts_1984 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of benznidazole as the primary subject, and while CCNU (lomustine, not semustine) PK changes are mentioned, no quantitative PK parameters for semustine are reported. |
| popPK | Schacht_1981 | irrelevant | 0 | 0 | The paper is a nephrotoxicity study of BCNU and methyl CCNU, not a pharmacokinetic study of semustine, and contains no PK parameter values. |
| popPK | Stables_1992 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of a chemotherapy combination (BELD) and does not report any pharmacokinetic parameters for semustine or any other drug. |
| PD | Stroehlein_1982 | not_relevant | 0 | 0 | The paper is a Phase II clinical trial reporting clinical response rates and toxicity, with no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Tapiero_1989 | irrelevant | 0 | 0 | The paper focuses on the cytotoxicity and DNA-damaging effects of fotemustine (a different nitrosourea), not the pharmacokinetics of semustine. |
| PD | Thao_2015 | not_relevant | 0 | 0 | The paper reports an IC50 for scutebarbalactone VN, not semustine; semustine is only mentioned as a connectivity map match without any PD data. |
| PD | Wang_2013 | not_relevant | 0 | 0 | The paper reports clinical outcomes (efficacy/safety) of a conditioning regimen containing semustine but provides no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Zeller_1979 | not_relevant | 2 | 1 | The paper reports qualitative dose-response comparisons (median survival time) for various nitrosoureas but does not provide numeric PD parameters (Emax, EC50) or a formal PK/PD model for semustine. |
| PD | Zeller_1981 | not_relevant | 0 | 0 | The paper describes qualitative tumor regression and life-span changes in a rat model but does not report any numeric concentration-effect or dose-response parameters for semustine. |
| popPK | Zhelev_2009 | irrelevant | 0 | 0 | The study focuses on nitroxyl-labeled analogues of lomustine (CCNU) for MRI, not semustine (mechlorethamine), and reports no PK parameters for semustine. |
| popPK | Zheleva_2001 | irrelevant | 0 | 0 | The paper studies physicochemical properties and antimelanomic effects of spin-labeled nitrosoureas and triazenes (comparing to lomustine and dacarbazine), not pharmacokinetic parameters of semustine. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
