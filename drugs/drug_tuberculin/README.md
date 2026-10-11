<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;tuberculin&quot;}]"></div>

# tuberculin

- **generic name:** tuberculin
- **ATC codes:** `V04CF01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Tuberculin is a diagnostic agent used to detect tuberculosis infection. It is listed as a WHO essential medicine and is widely used for tuberculosis testing.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q29505](https://www.wikidata.org/wiki/Q29505) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:31 | 12:04 | 0/0/0 | 0/0/0 | 0/0/0 | 335,213/4,685 | ollama / glm-5.3-flash | 22 | 3/14 | 22/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 362 matched, 97 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alli_2021 | irrelevant | 0 | 0 | Clinical outcome study of tubercular uveitis treatment; tuberculin is only a diagnostic skin test and no PK parameters are reported. |
| PGx | Apt_1993 | not_relevant | 2 | 3 | Tuberculin is a diagnostic antigen, not a drug; reported H-2 effects concern DTH/survival, not PK/PD parameters of a pharmacological agent. |
| popPK | Auclair_2002 | irrelevant | 0 | 0 | Tuberculin appears only as a diagnostic skin test; the PK data concern antituberculous drugs (INH, RIF, etc.), not tuberculin itself. |
| PGx | Badawy_2013 | not_relevant | 3 | 3 | NRAMP1 polymorphism affects BCG vaccine efficacy/tuberculin response, not a PK/PD parameter of a drug. |
| popPK | Bisht_2022 | irrelevant | 0 | 0 | This is a review of Glycyrrhiza glabra pharmacology; tuberculin is not the subject drug and no PK parameters for it appear. |
| popPK | Courtney_2026 | irrelevant | 0 | 0 | Tuberculin appears only as the Mantoux skin test for TB screening; the PK subject drugs are rifapentine and isoniazid, not tuberculin. |
| PGx | Cox_2025 | not_relevant | 0 | 0 | Study of multi-omic signatures of resistance to TST/IGRA conversion; no drug PK/PD parameters or pharmacogenomic drug effects reported. |
| popPK | Drusano_1995 | irrelevant | 0 | 0 | The study concerns ciprofloxacin, not tuberculin; tuberculin is not mentioned at all. |
| PGx | Eassa_2011 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on PK/PD parameters of tuberculin is reported; "genotype" refers to HPV typing only. |
| popPK | Fan_2023 | irrelevant | 0 | 0 | Tuberculin appears only as a "tuberculin syringe" for tumor cell injection; the PK/PD models concern rHuEPO, romiplostim, and carboplatin in rats, with no tuberculin disposition parameters. |
| popPK | Gafar_2026 | irrelevant | 0 | 0 | The paper models rifampicin, not tuberculin; tuberculin appears only as a diagnostic skin test for trial eligibility, so no tuberculin PK parameters exist here. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hong_2023 | irrelevant | 0 | 0 | This is a transcriptional/genomics study of monocyte responses; tuberculin is only a diagnostic skin test, with no PK parameters reported. |
| PGx | Hong_2023_2 | not_relevant | 0 | 0 | Tuberculin is a diagnostic skin-test antigen, not a drug; the paper reports eQTL associations with TST/IGRA conversion and cytokine expression, not PK/PD parameters. |
| PGx | Hong_2024 | not_relevant | 1 | 3 | Tuberculin is a diagnostic skin-test antigen, not a drug; reported genotype effects concern eQTLs, cytokine expression, and TST/IGRA conversion, not PK/PD parameters of a medication. |
| PGx | Hur_2015 | not_relevant | 0 | 0 | Paper evaluates IgG serodiagnostic responses to TB antigens; tuberculin is a diagnostic skin test antigen, not a drug, and no pharmacogenomic PK/PD effect is reported. |
| popPK | Kiser_2012 | irrelevant | 0 | 0 | The study reports population PK parameters for isoniazid, not tuberculin, so tuberculin is not the subject drug. |
| PGx | Kroon_2018 | not_relevant | 0 | 0 | Tuberculin is a diagnostic antigen, not a drug; no gene variant effect on PK/PD parameters is reported. |
| PGx | Lachmandas_2018 | not_relevant | 0 | 0 | Tuberculin is a diagnostic antigen, not a drug; the paper reports cytokine QTL effects on immune responses, not pharmacogenomic effects on any PK/PD parameter. |
| popPK | Lickliter_2020 | irrelevant | 0 | 0 | This is a PK study of camrelizumab (anti-PD-1 antibody); tuberculin appears only as an in-vitro assay reagent, not the subject drug. |
| popPK | Marier_2002 | irrelevant | 0 | 0 | The study reports PK parameters for tobramycin, not tuberculin; tuberculin is not the subject drug. |
| popPK | Mase_2016 | irrelevant | 0 | 0 | This is a levofloxacin PK study; tuberculin is not the subject drug and no tuberculin parameters are reported. |
| popPK | Miyabe-Nishiwaki_2021 | irrelevant | 0 | 0 | This is a propofol PK study in chimpanzees; tuberculin appears only as a routine veterinary skin test, with no tuberculin pharmacokinetic parameters reported. |
| PGx | Pineda-Reyes_2019 | not_relevant | 0 | 0 | This is a drug-drug interaction (cobicistat–fluticasone) case report; no gene variant/genotype/phenotype effect on tuberculin PK/PD is reported. |
| popPK | Schwalb_2023 | irrelevant | 0 | 0 | This is an epidemiological model of tuberculin skin test reversion and annual risk of infection, not a pharmacokinetic study; "ka" is infection risk, not an absorption rate constant, and no PK disposition parameters appear. |
| PGx | Shastri_2026 | not_relevant | 1 | 1 | Review mentions pharmacogenomic-guided TB treatment only in passing; no gene variant effect on PK/PD parameters of tuberculin or any drug is reported. |
| popPK | Sheridan_2025 | irrelevant | 0 | 0 | This is a PK study of buprenorphine in owl monkeys, not tuberculin; no tuberculin parameters are present. |
| popPK | Simeon_2024 | irrelevant | 0 | 0 | The subject drug is linezolid, not tuberculin; no tuberculin PK parameters are reported. |
| PGx | Simmons_2021 | not_relevant | 0 | 0 | Tuberculin is a diagnostic antigen, not a drug; PRKAG2 SNPs associate with TST/IGRA conversion phenotype, not a PK/PD parameter. |
| PGx | Strapagiel_2008 | not_relevant | 3 | 4 | Reports associations of CD14/TLR genotypes with tuberculin skin test status and monocyte CD14 density, but no genotype effect on a fitted PK/PD parameter of tuberculin is quantified. |
| PGx | Thijs_2019 | not_relevant | 2 | 3 | Drug-drug interaction (rifampicin CYP3A4 induction altering hydrocortisone metabolism), not a pharmacogenomic variant effect on tuberculin PK/PD. |
| PGx | Tokars_2001 | not_relevant | 0 | 0 | Paper is about TB infection control practices; tuberculin is a diagnostic skin-test antigen, not a drug, and no pharmacogenomic PK/PD effects are reported. |
| PGx | Toyota_2001 | not_relevant | 0 | 0 | Tuberculin is a diagnostic agent; no gene variant effect on PK/PD parameters is reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
