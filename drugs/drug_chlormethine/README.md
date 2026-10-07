<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;chlormethine&quot;}]"></div>

# chlormethine

- **generic name:** chlormethine
- **ATC codes:** `L01AA05`
- **DrugBank:** [DB00888](https://go.drugbank.com/drugs/DB00888) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Chlormethine (mechlorethamine) is a nitrogen mustard alkylating agent used to treat certain lymphomas, including Hodgkin's lymphoma and the skin cancer mycosis fungoides. It remains in use and is authorised in the European Union for treating mycosis fungoides.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418011](https://www.wikidata.org/wiki/Q418011) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 0:39 | 0/0/0 | 1/0/0 | 0/0/0 | 82,596/2,053 | einfracz / qwen3.8-27b | 4 | 1/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Maisin_1985_proteinuria](drugs/drug_chlormethine/pd_Maisin_1985_proteinuria.md) | proteinuria biomarker turnover ← chlormethine | — | Maisin A et al., [Value of chlormethine in children with…, Archives francaises de pedi… (1985) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlormethine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (intercalation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergenheim_1998 | irrelevant | 0 | 0 | The paper is a review of estramustine phosphate, a completely different drug, and contains no data for chlormethine. |
| popPK | Chandra_2020 | irrelevant | 0 | 0 | The study focuses on nitrogen mustard exposure and biomarker detection, not chlormethine pharmacokinetics. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper is a review of nitrogen mustard-based hybrid molecules for cancer therapy and does not report any pharmacokinetic parameters (CL, V, etc.) for chlormethine. |
| popPK | Chien_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ureidomustin (BO-1055) in rats, not chlormethine. |
| popPK | DERBY_1961 | irrelevant | 0 | 0 | The paper is about bacteriemia in rabbits and does not study the pharmacokinetics of chlormethine. |
| popPK | Esma_2017 | irrelevant | 0 | 0 | The paper is a review of melphalan, a different drug, and does not mention or report any pharmacokinetic data for chlormethine. |
| popPK | Facchin_2023 | irrelevant | 0 | 0 | The paper studies ZR2002 and its analogs in a mouse xenograft model, not chlormethine, and does not report PK parameters for chlormethine. |
| popPK | Fahmy_2023 | irrelevant | 0 | 0 | The paper is a clinical case report and literature review on the efficacy of topical mechlorethamine for psoriasis, containing no pharmacokinetic data or disposition parameters. |
| popPK | Frei_1998 | irrelevant | 0 | 0 | The paper is a conceptual review on dose intensity in combination chemotherapy and does not report pharmacokinetic parameters for chlormethine. |
| PD | Frei_1998 | not_relevant | 1 | 0 | The paper is a conceptual review on dose intensity and combination chemotherapy strategies, lacking specific pharmacokinetic data or numeric pharmacodynamic parameters for chlormethine. |
| PD | Giuliano_2022 | not_relevant | 0 | 0 | The paper reports in vitro release and permeation kinetics (PK/physicochemical properties) but contains no pharmacodynamic (effect) data or exposure-response analysis. |
| PD | He_2017 | not_relevant | 3 | 2 | The paper reports a qualitative ranking of drug efficacy and mentions IC50 values from MTT assays, but does not provide the specific numeric PD parameters or concentration-effect curves for chlormethine in the text. |
| popPK | Hong_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclophosphamide and its metabolites, not chlormethine. |
| popPK | Juma_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclophosphamide and its metabolites, not chlormethine. |
| popPK | Kestell_2000 | irrelevant | 0 | 0 | The paper studies SN 23862 and CB 1954 in mice, not chlormethine. |
| popPK | Laurens_2016 | irrelevant | 0 | 0 | The paper concerns the radiolabeling and evaluation of a novel hypoxia imaging agent in mice, and does not report pharmacokinetic parameters for chlormethine. |
| popPK | Lee_1986 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of chlorambucil, phenylacetic acid mustard, and beta, beta-difluorochlorambucil, not chlormethine (clomethine/gemcitabine). |
| popPK | Lewis_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ifosfamide, not chlormethine. |
| popPK | Lewis_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ifosfamide, not chlormethine. |
| popPK | Lim_2026 | irrelevant | 0 | 0 | The study is a nationwide cohort analysis of cancer risk associated with IARC Group 1 pharmaceuticals and contains no pharmacokinetic data for chlormethine. |
| PD | Lim_2026 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing cancer risk associated with drug exposure (dose/duration) using hazard ratios, not a pharmacodynamic study reporting concentration-effect or dose-response parameters (e.g., Emax, EC50) for a specific drug like chlormethine. |
| PD | Maisin_1985 | not_relevant | 1 | 0 | The paper reports clinical outcomes (remission rates, time to response) for a fixed dose but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Meng_2024 | irrelevant | 0 | 0 | The paper studies the prodrug AST-001, not chlormethine. |
| popPK | Nugent_1987 | irrelevant | 0 | 0 | The study examines the immunological effect of alkylating agents on bacterial clearance in mice, not the pharmacokinetics of chlormethine. |
| popPK | OConnor_1990 | irrelevant | 0 | 0 | The paper studies DNA lesion kinetics in mouse L1210 cells using nitrogen mustards (mechlorethamine, etc.) and does not involve chlormethine. |
| popPK | Purvis_2023 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of bendamustine, not chlormethine. |
| popPK | Sharma_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetics for Chlorambucil, not chlormethine. |
| popPK | Skretkowicz_1995 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for the probe drug antipyrine to evaluate the effect of chlormethine (a co-administered agent), not for chlormethine itself. |
| popPK | Sparidans_2011 | irrelevant | 0 | 0 | The study concerns olaparib and melphalan, not chlormethine (which does not appear in the evidence). |
| popPK | Toews_1985 | irrelevant | 0 | 0 | The study investigates the clearance of bacteria (Haemophilus influenzae) from mouse lungs using complement and neutrophils, and does not involve the drug chlormethine or any pharmacokinetic parameters. |
| popPK | Wainer_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ifosfamide, not chlormethine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates a cancer nanomicelle drug (Mech02/arsenic/nitrogen mustard) and does not mention chlormethine. |
| popPK | Webster_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of C5a and C5a des Arg in rabbits, not chlormethine. |
| popPK | Zia_2022 | irrelevant | 0 | 0 | The study investigates the interaction between ifosfamide (a different drug) and human alpha-2-macroglobulin, not chlormethine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
