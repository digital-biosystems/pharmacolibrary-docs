<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;peruvoside&quot;}]"></div>

# peruvoside

- **generic name:** peruvoside
- **ATC codes:** `C01AX02`
- **DrugBank:** [DB13756](https://go.drugbank.com/drugs/DB13756) · **PubChem:** not captured
- **molar mass:** 548.673 g/mol (C30H44O9) — DrugBank
- **groups:** experimental

## About

Peruvoside is a cardiac glycoside with cardiotonic activity, classified among other cardiac glycosides used in cardiac therapy. It appears to be only an experimental compound, with no authorised marketing identified.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7171218](https://www.wikidata.org/wiki/Q7171218) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 03:15 | 3:57 | 0/0/0 | 0/0/0 | 0/0/0 | 143,463/3,151 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 7/11 | 17/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
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
| popPK | Abdel_2021 | irrelevant | 0 | 0 | The paper is a systematic review or methodological assessment of pharmacokinetic studies (likely for a different drug, given the references to spironolactone and standard PK checklist items) and does not report original quantitative PK parameters for peruvoside. |
| popPK | Adeyemi_2019 | irrelevant | 0 | 0 | The study is an in vitro screening for anti-Toxoplasma activity and in silico modeling; it does not report pharmacokinetic parameters (CL, V, etc.) for peruvoside. |
| popPK | Ahmed_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer effects (cell cycle arrest) and does not report any pharmacokinetic parameters. |
| popPK | Amend_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac toxicity using hiPSC-CM and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Bhatia_1975 | irrelevant | 0 | 0 | The study uses peruvoside as a diagnostic probe to assess myocardial function via systolic time intervals and does not report any pharmacokinetic parameters. |
| popPK | Bose_1999 | irrelevant | 0 | 0 | The paper is a clinical case series on the cardiovascular toxicity of yellow oleander ingestion and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Bossuyt_1996 | irrelevant | 0 | 0 | The study focuses on organic anion transporters in Xenopus oocytes and does not involve peruvoside or its pharmacokinetics. |
| popPK | Charfi_2020 | irrelevant | 0 | 0 | The study focuses on digoxin pharmacokinetics and therapeutic drug monitoring, not peruvoside. |
| popPK | Cheng_2019 | irrelevant | 0 | 0 | The paper investigates intracellular calcium and sodium dynamics in rat neurons, not the pharmacokinetics of peruvoside. |
| popPK | Da_2019 | irrelevant | 0 | 0 | The paper studies the mechanism of action of proscillaridin A on MYC protein in leukemia cells, not the pharmacokinetics of peruvoside. |
| popPK | Feng_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of peruvoside's anti-leukemic effects (apoptosis, cell cycle) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ferreira_2023 | irrelevant | 0 | 0 | The study investigates the toxicology and antitumoral effects of marinobufagin, not the pharmacokinetics of peruvoside. |
| popPK | Fierro_1987 | irrelevant | 0 | 0 | no_text gate: only 234 chars of text extracted (&lt; 400) |
| popPK | Gaitondé_1975 | irrelevant | 0 | 0 | The study investigates the mechanism of peruvoside-induced emesis in cats and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Gaitondé_1977 | irrelevant | 0 | 0 | The study investigates the mechanism of neurotoxicity (serotonin release) in cats, not the pharmacokinetic disposition parameters (CL, V, etc.) of peruvoside. |
| popPK | Garbe_1968 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Gozalpour_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein binding affinities, not a pharmacokinetic study reporting disposition parameters for peruvoside. |
| PGx | Gozalpour_2013 | not_relevant | 0 | 0 | The paper studies the binding affinity of peruvoside to P-glycoprotein mutants in vitro, not the pharmacokinetic or pharmacodynamic parameters of peruvoside in humans or patients. |
| popPK | Grene-Lerouge_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin-specific Fab, not peruvoside. |
| popPK | Hedman_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not peruvoside. |
| popPK | Hundeshagen_1968 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Imai_1972 | irrelevant | 2 | 1 | The study applies a two-compartment model to cardiac pharmacodynamics (dose-response) in dog heart-lung preparations, not to pharmacokinetic disposition parameters (CL, V, ka) of peruvoside. |
| popPK | Kaushik_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-tumor effects and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Kaushik_2017_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer effects (cytotoxicity, cell cycle, migration) and does not report pharmacokinetic parameters. |
| popPK | Kramer_1969 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Kubin_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gitoformate, not peruvoside. |
| popPK | Lai_2022 | irrelevant | 0 | 0 | The study focuses on the mechanistic and anti-cancer effects of peruvoside in vitro and in vivo, with no pharmacokinetic parameters reported. |
| popPK | Latifi_2000 | irrelevant | 0 | 0 | The paper is a review of inotropic agents (digoxin, catecholamines, PDE inhibitors) in pediatrics and does not mention peruvoside. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper describes a drug discovery mechanism and screening strategy for peruvoside in cancer cells, containing no pharmacokinetic parameters or disposition data. |
| popPK | Liu_1987 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| popPK | Liu_1988 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Maes_2022 | irrelevant | 0 | 0 | The paper is a case report on foxglove (Digitalis purpurea) poisoning, not a pharmacokinetic study of peruvoside. |
| popPK | Magadum_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic screening for cardiomyocyte proliferation and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Milella_2025 | irrelevant | 0 | 0 | The paper is a case report on yellow oleander poisoning that quantifies peruvoside levels but does not report pharmacokinetic parameters (CL, V, ka, etc.) or a PK model. |
| popPK | Misra_1991 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| popPK | Mutlib_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gomphoside, not peruvoside. |
| popPK | Ni_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oleandrin in mice, not peruvoside. |
| popPK | Patel_2016 | irrelevant | 0 | 0 | The paper is a review of cardiac glycosides and does not report original quantitative pharmacokinetic parameters for peruvoside. |
| popPK | Pavithran_2023 | irrelevant | 0 | 0 | The paper is an in-vitro transcriptomic and molecular docking study investigating the mechanism of action of peruvoside in cancer cells, containing no pharmacokinetic data. |
| popPK | Pavithran_2025 | irrelevant | 0 | 0 | The study is a network pharmacology and molecular modeling analysis of breast cancer mechanisms, not a pharmacokinetic study, and contains no PK parameters for peruvoside. |
| popPK | Piccioni_2004 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro screen for neuroprotective drugs and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Radogna_2016 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of UNBS1450 in neuroblastoma cells and does not study peruvoside or report any pharmacokinetic parameters. |
| popPK | Reddy_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of peruvoside's anticancer effects and does not report any pharmacokinetic parameters. |
| popPK | Ren_2025 | irrelevant | 0 | 0 | The study focuses on bufadienolides (resibufogenin, bufalin, arenobufagin) and does not mention peruvoside. |
| popPK | Rengelshausen_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin and its interaction with clarithromycin, not peruvoside. |
| popPK | Samanta_2016 | irrelevant | 0 | 0 | The study evaluates the antifertility activity of a cardiac glycoside-free extract of Thevetia peruviana leaves and does not report any pharmacokinetic parameters for peruvoside. |
| popPK | Simpson_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anoikis sensitization and tumor metastasis, reporting no pharmacokinetic parameters for peruvoside. |
| popPK | Smith_1985 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of cardiac glycosides (digoxin and digitoxin), not peruvoside. |
| popPK | Sykes_2023 | irrelevant | 0 | 0 | This is a toxicology case report describing plant identification and postmortem detection of peruvoside in goat rumen contents, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on TXA9, a different cardiac glycoside, not peruvoside. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper is a mechanistic antiviral study reporting EC50 values and viral titers, not pharmacokinetic parameters (CL, V, ka) for peruvoside. |
| popPK | Ye_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Na+, K+-ATPase inhibition and does not report pharmacokinetic parameters. |
| popPK | Zeitlin_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digitoxin, not peruvoside. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of periplocymarin (PPM) and its prodrug, not peruvoside. |
| popPK | Škubník_2021 | irrelevant | 0 | 0 | The paper is a review of the anticancer mechanisms of cardiac glycosides (including peruvoside) and does not report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
