<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;hydroquinidine&quot;}]"></div>

# hydroquinidine

- **generic name:** hydroquinidine
- **ATC codes:** `C01BA13`
- **DrugBank:** [DB15300](https://go.drugbank.com/drugs/DB15300)
- **groups:** investigational

## About

**Description.** Hydroquinidine is under investigation in clinical trial NCT00927732 (Hydroquinidine Versus Placebo in Patients With Brugada Syndrome).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 10:17 | 18:37 | 0/0/0 | 1/0/0 | 0/0/0 | 93,622/3,993 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 5/5 | 8/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Griffin_2012](drugs/drug_hydroquinidine/pd_Griffin_2012_P_falciparum_growth_inhibition.md) | Griffin CE et al., Mutation in the Plasmodium falciparum C…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.05667-11](https://doi.org/10.1128/AAC.05667-11) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarons_1989 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tobramycin, not hydroquinidine. |
| popPK | Armstrong_1985 | irrelevant | 0 | 0 | The paper is a case report on quinidine-induced photosensitivity and contains no pharmacokinetic parameters for hydroquinidine. |
| popPK | Beermann_1977 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bendroflumethiazide, not hydroquinidine. |
| popPK | Bonnetblanc_1987 | irrelevant | 0 | 0 | The paper is a clinical case report on dermatological side effects (lichenoid photodermatitis) and contains no pharmacokinetic data or disposition parameters for hydroquinidine. |
| popPK | Bozic_2018 | irrelevant | 0 | 0 | The paper is a review of quinidine (not hydroquinidine) for arrhythmias and contains no pharmacokinetic parameters. |
| popPK | Chan_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lamotrigine, not hydroquinidine. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for CC-122, not hydroquinidine. |
| popPK | Cummings_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for agitation in Alzheimer's disease and does not report pharmacokinetic parameters for hydroquinidine. |
| popPK | Damkier_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinidine, not hydroquinidine, and does not report parameters for the target drug. |
| popPK | Edwards_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinidine, not hydroquinidine, which is the required subject drug. |
| popPK | Eisner_1977 | irrelevant | 0 | 0 | The paper is a case report on quinidine-induced agranulocytosis and does not report any pharmacokinetic parameters for hydroquinidine. |
| popPK | Fenster_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with quinidine acting only as a co-administered interacting agent rather than the subject drug. |
| PD | French_1965 | not_relevant | 0 | 0 | The paper focuses on the analytical identification of chemical complexes in pharmaceutical dosage forms, not on pharmacodynamic or exposure-response relationships. |
| popPK | Fu_1979 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cefotaxime, not hydroquinidine. |
| popPK | Fukao_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of quinidine transport in canine kidney cells, not a pharmacokinetic study of hydroquinidine. |
| popPK | Gaita_2004 | irrelevant | 0 | 0 | The study reports electrophysiological effects (QT interval prolongation) rather than pharmacokinetic parameters (CL, V, ka) for hydroquinidine. |
| popPK | Guharoy_1991 | irrelevant | 0 | 0 | The paper is a case report on quinidine-induced hepatotoxicity and does not report pharmacokinetic parameters for hydroquinidine. |
| popPK | HAYWARD_1961 | irrelevant | 0 | 0 | The evidence only lists "Quinidine" and contains no pharmacokinetic data, parameters, or mention of hydroquinidine. |
| popPK | Ha_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinidine-N-oxide, not hydroquinidine. |
| popPK | Hager_1979 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, with quinidine acting only as an interacting agent, and does not provide PK data for hydroquinidine. |
| popPK | Handler_1975 | irrelevant | 0 | 0 | The paper is a case report on quinidine hepatotoxicity and does not report pharmacokinetic parameters for hydroquinidine. |
| popPK | Hardy_1988 | irrelevant | 0 | 0 | The study focuses on quinidine and its metabolites, not hydroquinidine, and does not report PK parameters for the target drug. |
| popPK | Holt_1983 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of amiodarone, not hydroquinidine. |
| popPK | Jermain_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lithium, not hydroquinidine. |
| popPK | KATZ_1948 | irrelevant | 0 | 0 | The evidence only lists "Quinidine" and contains no pharmacokinetic data, parameters, or text for hydroquinidine. |
| popPK | Kloprogge_2014 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for quinine, not hydroquinidine (which was used only as an internal standard). |
| PD | Kloprogge_2014 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for quinine, not hydroquinidine, and does not include any pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The text is a general review of pharmacometric methods in pediatrics and does not report any specific pharmacokinetic parameters for hydroquinidine. |
| popPK | Maharaj_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for olanzapine, not hydroquinidine. |
| popPK | Malik_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of quinidine (not hydroquinidine) interaction with VDAC channels and does not report pharmacokinetic parameters. |
| popPK | Manchandani_2018 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for polymyxin B, not hydroquinidine. |
| popPK | Mikus_1986 | irrelevant | 0 | 0 | The study investigates quinidine, not hydroquinidine, and does not report parameters for the subject drug. |
| popPK | Mukkavilli_2017 | irrelevant | 0 | 0 | The study is an in-vitro transporter evaluation using quinidine (not hydroquinidine) and does not report pharmacokinetic disposition parameters. |
| popPK | Ochs_1980 | irrelevant | 0 | 0 | The study focuses on quinidine (not hydroquinidine) and reports CSF/serum concentration ratios rather than standard population pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Ochs_1980_2 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of quinidine, not hydroquinidine, and provides no data for the subject drug. |
| popPK | Pariser_1975 | irrelevant | 0 | 0 | The paper is a clinical case report on quinidine photosensitivity and contains no pharmacokinetic parameters for hydroquinidine. |
| popPK | Rakhit_1984 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for quinidine and its metabolites, but does not report data for hydroquinidine. |
| popPK | Rakhit_1984_2 | irrelevant | 0 | 0 | The study investigates quinidine and quinidine-N-oxide, not hydroquinidine. |
| popPK | Rakhit_1984_3 | irrelevant | 0 | 0 | The study investigates quinidine, not hydroquinidine, which is the required subject drug. |
| popPK | Rančić_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meropenem, not hydroquinidine. |
| popPK | Sheiner_1992 | irrelevant | 0 | 0 | The provided evidence contains only a generic title and no specific data, drug names, or numeric parameters for hydroquinidine. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The paper is a review of Nuedexta (dextromethorphan/quinidine) for ALS and does not report pharmacokinetic parameters for hydroquinidine. |
| popPK | Swartling_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for cefotaxime, not hydroquinidine. |
| popPK | Tucker_1979 | irrelevant | 0 | 0 | The text is a general review of pharmacokinetic principles and does not report specific quantitative parameters for hydroquinidine. |
| popPK | Tzivoni_1984 | irrelevant | 0 | 0 | The paper reports on the use of magnesium sulfate for torsades de pointes and does not contain any pharmacokinetic parameters for hydroquinidine. |
| popPK | Ueda_1976 | irrelevant | 0 | 0 | The study focuses on quinidine, not hydroquinidine, and does not report PK parameters for the target drug. |
| popPK | Van_1985 | irrelevant | 0 | 0 | The study focuses on quinidine (not hydroquinidine) and provides no quantitative PK parameters for the subject drug. |
| popPK | Viskin_2013 | irrelevant | 0 | 0 | The paper is a survey on the global availability of quinidine and does not report any pharmacokinetic parameters for hydroquinidine. |
| popPK | Weiss_2024 | irrelevant | 0 | 0 | The paper is a review of distribution clearance for 15 other drugs (e.g., rocuronium, propranolol) and does not mention or report parameters for hydroquinidine. |
| popPK | Wertz_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for etomidate in cats, not hydroquinidine. |
| popPK | White_1981 | irrelevant | 0 | 0 | The study focuses on quinidine (not hydroquinidine) and reports clinical efficacy and in-vitro MICs, not quantitative pharmacokinetic parameters. |
| popPK | Wilson_1988 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for doxycycline in dogs, not hydroquinidine. |
| popPK | Yang_2009 | irrelevant | 0 | 0 | The paper is a review of quinidine (not hydroquinidine) and contains no quantitative pharmacokinetic parameters. |
| popPK | Yoshitomi_2019 | irrelevant | 0 | 0 | The paper is a case report on quinidine (not hydroquinidine) and does not report pharmacokinetic parameters such as clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
