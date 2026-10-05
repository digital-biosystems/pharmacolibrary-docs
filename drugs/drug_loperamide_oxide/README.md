<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;loperamide oxide&quot;}]"></div>

# loperamide oxide

- **generic name:** loperamide oxide
- **ATC codes:** `A07DA05`
- **DrugBank:** [DB14661](https://go.drugbank.com/drugs/DB14661) · **PubChem:** not captured
- **molar mass:** 493.04 g/mol (C29H33ClN2O3) — DrugBank
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:14 | 2:27 | 0/0/0 | 0/0/0 | 0/0/0 | 89,570/2,786 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/5 | 6/3 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abigerges_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of irinotecan and its metabolite SN-38, with loperamide used only as a therapeutic agent for toxicity management, not as the subject of PK analysis. |
| popPK | Beubler_1993 | irrelevant | 0 | 0 | The study reports pharmacodynamic antisecretory effects (dose-response and time course) rather than quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Beubler_1993 | not_relevant | 4 | 2 | The paper describes a dose-response relationship qualitatively but does not provide numeric PD parameters (Emax, EC50) or specific effect values in the text. |
| popPK | Eberlin_2012 | irrelevant | 0 | 0 | The paper is a review of racecadotril and its metabolite thiorphan, with loperamide mentioned only as a comparator drug for efficacy, not as the subject of pharmacokinetic analysis. |
| popPK | Ehrenpreis_1992 | irrelevant | 0 | 0 | The study focuses on D-xylose malabsorption in HIV patients and mentions loperamide only as a standard therapy, providing no pharmacokinetic parameters for loperamide_oxide. |
| popPK | Enigbokan_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dideoxycytidine (ddC), using loperamide only as a co-administered inhibitor, and does not report PK parameters for loperamide_oxide. |
| popPK | Eskens_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BIBW 2992, not loperamide_oxide, which is only mentioned as a treatment for diarrhea. |
| popPK | Farack_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of action (intestinal secretion and permeability) of loperamide, not its pharmacokinetic disposition parameters. |
| popPK | Fu_2016 | irrelevant | 0 | 0 | The paper studies the metabolism of a DTPA prodrug in skin cells and uses loperamide only as a carboxylesterase inhibitor, not as the subject drug for PK analysis. |
| popPK | Hamilton_2021 | irrelevant | 0 | 0 | The study focuses on abemaciclib pharmacokinetics and loperamide is only used as a prophylactic agent for diarrhea management, with no PK parameters reported for loperamide. |
| popPK | Haraya_2017 | irrelevant | 0 | 0 | The study focuses on CYP2C8 substrates (pioglitazone, rosiglitazone, amodiaquine, chloroquine) and mentions loperamide only as a secondary example for variability prediction, not as the subject of a PK parameter extraction study. |
| popPK | Hernández-Lozano_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of loperamide's metabolite (N-desmethyl-loperamide) and verapamil, not loperamide_oxide. |
| popPK | Heykants_1974 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | Hogan_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic modeling of cell monolayer permeation, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for loperamide_oxide. |
| popPK | Huismans_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lapatinib, binimetinib, and vinorelbine, not loperamide_oxide. |
| popPK | Iwase_2017 | irrelevant | 0 | 0 | The study is an in-vitro investigation of CYP inhibition by loperamide (not loperamide_oxide) and does not report pharmacokinetic disposition parameters for the subject drug. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | The paper is a review of herbal medicine interactions and does not report pharmacokinetic parameters for loperamide_oxide. |
| popPK | Kamali_1992 | irrelevant | 2 | 0 | The study reports only qualitative dose proportionality (bioavailability proportional to dose) without providing specific quantitative PK parameters (CL, V, t1/2, etc.) for loperamide or loperamide oxide. |
| popPK | Keyvanjah_2019 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of neratinib, with loperamide acting as a co-administered agent, and no PK parameters for loperamide are reported. |
| popPK | Killinger_1979 | irrelevant | 0 | 0 | The study investigates loperamide hydrochloride, not loperamide_oxide. |
| popPK | Knupp_1993 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of didanosine, with loperamide acting only as a co-administered agent to modify gastrointestinal motility, not as the subject drug. |
| popPK | Kobayashi_2005 | irrelevant | 0 | 0 | The study investigates loperamide as a probe drug to assess P-gp function via its effect on digoxin pharmacokinetics, rather than reporting the pharmacokinetic parameters of loperamide itself. |
| popPK | Kumar_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bendamustine and its metabolite in mice, using loperamide only as an internal standard for the assay. |
| popPK | Lauritsen_1990 | irrelevant | 1 | 0 | The paper is a review of gastrointestinal drugs and mentions loperamide only in the context of Part II, which is not included in the provided evidence. |
| popPK | Lavrijsen_1995 | irrelevant | 2 | 0 | The study focuses on the in vitro reduction of the prodrug loperamide oxide to loperamide and in vivo PK in dogs, but the provided evidence contains no quantitative PK parameters (CL, V, ka, t1/2) for loperamide oxide itself. |
| PD | Lavrijsen_1995 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and metabolic reduction of the prodrug loperamide oxide to loperamide, without reporting any pharmacodynamic or exposure-response data. |
| popPK | Linseman_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alcohol, with loperamide used only as a comparator agent to test opioid effects on gastric emptying. |
| popPK | Loos_2024 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of docetaxel and ritonavir, with loperamide serving only as a co-administered agent to assess drug-drug interactions, and no quantitative PK parameters for loperamide are provided in the evidence. |
| popPK | Mairinger_2023 | irrelevant | 0 | 0 | The study focuses on the pulmonary disposition of metoclopramide, with loperamide mentioned only as a previously studied comparator substrate, and no PK parameters for loperamide_oxide are reported. |
| popPK | Mealey_2017 | irrelevant | 0 | 0 | The paper describes the establishment of a cell line for P-gp substrate assessment and mentions loperamide only as a known substrate example, without reporting any quantitative pharmacokinetic parameters for loperamide_oxide. |
| popPK | Molina_2002 | irrelevant | 0 | 0 | The study evaluates the efficacy of fumagillin for microsporidiosis and mentions loperamide only as a concomitant medication for symptom management, providing no pharmacokinetic data for loperamide_oxide. |
| popPK | Mukwaya_2005 | irrelevant | 2 | 0 | The study focuses on loperamide (not loperamide_oxide) and reports only relative percentage changes in exposure (AUC) rather than absolute quantitative PK parameters (CL, V, ka) for the target drug. |
| popPK | Myers_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of loperamide, not loperamide_oxide. |
| popPK | Paranjpe_2019 | irrelevant | 0 | 0 | The paper is a review of neratinib, and loperamide is only mentioned as a prophylactic agent for diarrhea, not as the subject of pharmacokinetic analysis. |
| popPK | Ragnarsson_2000 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Ragnarsson_2000 | not_relevant | 0 | 0 | The paper describes a clinical trial for loperamide (not loperamide oxide) and focuses on dosage optimization without reporting specific pharmacodynamic parameters or exposure-response models. |
| popPK | Robert_1998 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of irinotecan and its metabolites, mentioning loperamide only as a treatment for diarrhea, with no PK data for loperamide_oxide. |
| popPK | Silverman_1999 | irrelevant | 0 | 0 | The paper is a review of multidrug resistance transporters and does not contain pharmacokinetic data for loperamide_oxide. |
| popPK | Tekle_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of theophylline in the presence of loperamide, not the pharmacokinetic parameters of loperamide itself. |
| popPK | Valenzuela_2025 | irrelevant | 2 | 2 | The study reports PK parameters for loperamide and its metabolite M1, but the target drug is loperamide_oxide, which is not the subject of this study. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyrotinib, with loperamide serving only as a co-administered agent for diarrhea management, and no PK parameters for loperamide are reported. |
| popPK | Wheeler_2000 | irrelevant | 0 | 0 | The paper is a business/clinical development overview for loperamide (not loperamide_oxide) and contains no quantitative pharmacokinetic parameter values. |
| popPK | Yan_2025 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of RXFP4 agonists on loperamide-induced constipation in mice, not the pharmacokinetics of loperamide_oxide. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of loperamide, not loperamide_oxide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
