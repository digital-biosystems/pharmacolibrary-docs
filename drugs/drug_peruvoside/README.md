<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;peruvoside&quot;}]"></div>

# peruvoside

- **generic name:** peruvoside
- **ATC codes:** `C01AX02`
- **DrugBank:** [DB13756](https://go.drugbank.com/drugs/DB13756)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 14:28 | 10:28 | 0/0/0 | 1/0/0 | 0/0/0 | 382,198/7,442 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 7/11 | 17/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Samanta_2016](drugs/drug_peruvoside/pd_Samanta_2016_unknown.md) | Samanta J et al., Antifertility activity of Thevetia peru…, Indian journal of pharmacol… (2016) | [10.4103/0253-7613.194861](https://doi.org/10.4103/0253-7613.194861) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 57 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel_2021 | irrelevant | 0 | 0 | The paper is a systematic review or methodological assessment of other studies (referencing Du 2020, etc.) and does not report original quantitative PK parameters for peruvoside. |
| popPK | Adeyemi_2019 | irrelevant | 0 | 0 | The study is an in-vitro screening for anti-Toxoplasma activity and in-silico modeling, reporting no pharmacokinetic parameters for peruvoside. |
| popPK | Ahmed_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer effects (cell cycle arrest) and does not report any pharmacokinetic parameters. |
| popPK | Amend_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac effects using hiPSC-CM and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Bhatia_1975 | irrelevant | 0 | 0 | The study is a hemodynamic assessment of systolic time intervals in constrictive pericarditis, not a pharmacokinetic study, and reports no disposition parameters for peruvoside. |
| popPK | Bose_1999 | irrelevant | 0 | 0 | The paper is a clinical case series on the cardiovascular toxicity of yellow oleander ingestion and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Bossuyt_1996 | irrelevant | 0 | 0 | The paper focuses on the substrate specificity of an organic anion transporter for various drugs and steroids, but does not mention peruvoside or report any pharmacokinetic parameters for it. |
| popPK | Charfi_2020 | irrelevant | 0 | 0 | The study focuses on digoxin pharmacokinetics and therapeutic drug monitoring, not peruvoside. |
| popPK | Cheng_2019 | irrelevant | 0 | 0 | The paper investigates intracellular calcium and sodium dynamics in rat neurons and does not involve the drug peruvoside or pharmacokinetic parameters. |
| popPK | Da_2019 | irrelevant | 0 | 0 | The paper studies the mechanism of action of proscillaridin A on MYC protein stability in leukemia cells, not the pharmacokinetics of peruvoside. |
| popPK | Feng_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on anti-leukemia effects and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Ferreira_2023 | irrelevant | 0 | 0 | The study focuses on the toxicology and antitumoral effects of marinobufagin, not the pharmacokinetics of peruvoside. |
| popPK | Fierro_1987 | irrelevant | 0 | 0 | no_text gate: only 234 chars of text extracted (&lt; 400) |
| popPK | Gaitondé_1975 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study investigating the mechanism of emesis induced by peruvoside, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Gaitondé_1977 | irrelevant | 0 | 0 | The study investigates the mechanism of neurotoxicity (serotonin release) and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Garbe_1968 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Gozalpour_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on P-glycoprotein binding affinities, not a pharmacokinetic study reporting disposition parameters for peruvoside. |
| PGx | Gozalpour_2013 | not_relevant | 0 | 0 | The paper studies the binding affinity of peruvoside to P-glycoprotein mutants in vitro, not the pharmacokinetic or pharmacodynamic parameters of peruvoside in humans or patients. |
| popPK | Grene-Lerouge_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin-specific Fab, not peruvoside. |
| popPK | Hedman_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not peruvoside. |
| popPK | Hundeshagen_1968 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Imai_1972 | irrelevant | 2 | 1 | The study applies a two-compartment model to cardiac pharmacodynamics (dose-response) in heart-lung preparations rather than measuring pharmacokinetic disposition parameters (CL, V, ka) for peruvoside. |
| popPK | Kaushik_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-tumor effects and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Kaushik_2017_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of anticancer effects (cytotoxicity, cell cycle, migration) and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Kramer_1969 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Kubin_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gitoformate, not peruvoside. |
| popPK | Lai_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on peruvoside's anticancer effects and does not report any pharmacokinetic parameters. |
| popPK | Latifi_2000 | irrelevant | 0 | 0 | The paper is a review of inotropic agents (digoxin, catecholamines, PDE inhibitors) in pediatrics and does not mention peruvoside or provide any PK parameters for it. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper describes a drug discovery and mechanistic study of peruvoside in prostate cancer cells, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Liu_1987 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| popPK | Liu_1988 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Maes_2022 | irrelevant | 0 | 0 | The paper is a case report on foxglove (Digitalis purpurea) poisoning and does not study peruvoside or report any pharmacokinetic parameters for it. |
| popPK | Magadum_2022 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on cardiomyocyte proliferation and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Milella_2025 | irrelevant | 0 | 0 | The paper is a case report on yellow oleander poisoning that quantifies peruvoside levels but does not report pharmacokinetic parameters (CL, V, ka, etc.) or a PK model. |
| popPK | Misra_1991 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| popPK | Mutlib_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gomphoside, not peruvoside. |
| popPK | Ni_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oleandrin, not peruvoside. |
| popPK | Patel_2016 | irrelevant | 0 | 0 | The paper is a review of cardiac glycosides and does not report original quantitative pharmacokinetic parameters for peruvoside. |
| popPK | Pavithran_2023 | irrelevant | 0 | 0 | The paper is an in-vitro transcriptomic and mechanistic study of peruvoside's anticancer effects in breast cancer cells, containing no pharmacokinetic parameters. |
| popPK | Pavithran_2025 | irrelevant | 0 | 0 | The study is a network pharmacology and molecular modeling analysis of breast cancer mechanisms, not a pharmacokinetic study, and contains no PK parameters for peruvoside. |
| popPK | Piccioni_2004 | irrelevant | 0 | 0 | The paper is a mechanistic screen for neuroprotective drugs and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Radogna_2016 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of UNBS1450 in neuroblastoma cells and does not study peruvoside or report pharmacokinetic parameters. |
| popPK | Reddy_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer pathways and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Ren_2025 | irrelevant | 0 | 0 | The study focuses on bufadienolides (resibufogenin, bufalin, arenobufagin) and does not investigate peruvoside. |
| popPK | Rengelshausen_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin and clarithromycin, not peruvoside. |
| popPK | Samanta_2016 | irrelevant | 0 | 0 | The study evaluates the antifertility activity of a cardiac glycoside-free extract of Thevetia peruviana leaves and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Simpson_2009 | irrelevant | 0 | 0 | The paper is a mechanistic study on anoikis and metastasis using peruvoside as a probe, with no pharmacokinetic parameters reported. |
| popPK | Smith_1985 | irrelevant | 0 | 0 | The paper discusses digoxin and digitoxin, not peruvoside. |
| popPK | Sykes_2023 | irrelevant | 0 | 0 | The paper is a toxicology case report describing plant identification and tissue analysis, not a pharmacokinetic study, and contains no disposition parameters for peruvoside. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on TXA9, not peruvoside. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper is a mechanistic antiviral study reporting EC50 values and viral titers, not pharmacokinetic disposition parameters (CL, V, ka) for peruvoside. |
| popPK | Ye_1990 | irrelevant | 0 | 0 | The paper describes in-vitro mechanistic studies on Na+, K+-ATPase inhibition and contains no pharmacokinetic parameters for peruvoside. |
| popPK | Zeitlin_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digitoxin, not peruvoside. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study investigates periplocymarin (a cardiac glycoside), not peruvoside, and thus does not report PK parameters for the target drug. |
| popPK | Škubník_2021 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action (autophagy modulation) of cardiac glycosides and does not report any pharmacokinetic parameters for peruvoside. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
