<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;finerenone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Finerenone_Heinig2023_reference&quot;,&quot;label&quot;:&quot;Heinig_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/Finerenone_Heinig2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# finerenone

- **generic name:** finerenone
- **ATC codes:** `C03DA05`
- **DrugBank:** [DB16165](https://go.drugbank.com/drugs/DB16165) · **PubChem:** not captured
- **molar mass:** 378.432 g/mol (C21H22N4O3) — DrugBank
- **groups:** approved, investigational

## About

Finerenone is a nonsteroidal aldosterone antagonist used to treat chronic kidney disease associated with type 2 diabetes, and has also been studied for chronic heart failure. It is approved and authorised in the European Union, and remains under investigation for additional uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21099046](https://www.wikidata.org/wiki/Q21099046) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| finerenone | parent | 378.432 | C21H22N4O3 | DrugBank | — | Heinig_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:30 | 3:04 | 0/1/1 | 2/1/0 | 0/0/0 | 102,079/3,511 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 4/6 | 8/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.656). The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `engineer`</sub> | [Heinig_2023_reference](drugs/drug_finerenone/Finerenone_Heinig2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+8 cov.) | Heinig R et al., The Pharmacokinetics of the Nonsteroida…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01312-9](https://doi.org/10.1007/s40262-023-01312-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2022_reference](drugs/drug_finerenone/Finerenone_van2022_reference.md) | — | 1-compartment (no model) | 0 | van den Berg P et al., Finerenone Dose-Exposure-Response for t…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01082-2](https://doi.org/10.1007/s40262-021-01082-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.316). The first reading is what the record holds.">cross-check: disputed</span> | [Goulooze_2022_UACR](drugs/drug_finerenone/pd_Goulooze_2022_UACR.md) | urine albumin-to-creatinine ratio ← finerenone · delayed effect through an effect compartment | — | Goulooze SC et al., Dose-Exposure-Response Analysis of the…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01124-3](https://doi.org/10.1007/s40262-022-01124-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.316). The first reading is what the record holds.">cross-check: disputed</span> | [Goulooze_2022_eGFR](drugs/drug_finerenone/pd_Goulooze_2022_eGFR.md) | estimated glomerular filtration rate ← finerenone · delayed effect through an effect compartment | — | Goulooze SC et al., Dose-Exposure-Response Analysis of the…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01124-3](https://doi.org/10.1007/s40262-022-01124-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.271). The first reading is what the record holds.">cross-check: disputed</span> | [Snelder_2020_K](drugs/drug_finerenone/pd_Snelder_2020_K.md) | serum potassium concentration ← finerenone · indirect response — drug inhibits the loss of serum potassium concentration | — | Snelder N et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00820-x](https://doi.org/10.1007/s40262-019-00820-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.271). The first reading is what the record holds.">cross-check: disputed</span> | [Snelder_2020_UACR](drugs/drug_finerenone/pd_Snelder_2020_UACR.md) | urinary albumin:creatinine ratio ← finerenone · indirect response — drug inhibits the production of urinary albumin:creatinine ratio | — | Snelder N et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00820-x](https://doi.org/10.1007/s40262-019-00820-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.271). The first reading is what the record holds.">cross-check: disputed</span> | [Snelder_2020_eGFR_EPI](drugs/drug_finerenone/pd_Snelder_2020_eGFR_EPI.md) | estimated glomerular filtration rate ← finerenone · delayed effect through an effect compartment | — | Snelder N et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00820-x](https://doi.org/10.1007/s40262-019-00820-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.522). The first reading is what the record holds.">cross-check: disputed</span> | [Goulooze_2022_2_K](drugs/drug_finerenone/pd_Goulooze_2022_2_K.md) | serum potassium ← finerenone · indirect response — drug inhibits the loss of serum potassium | model (no simulator) | Goulooze SC et al., Finerenone Dose-Exposure-Serum Potassiu…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01083-1](https://doi.org/10.1007/s40262-021-01083-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=finerenone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NR3C2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 30 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bui_2024.pdf` | Bui TT et al., Pharmacokinetic and Pharmacodynamic Int…, European journal of drug me… (2024) | popPK | 10 | [10.1007/s13318-024-00917-0](https://doi.org/10.1007/s13318-024-00917-0) | [39307908](https://pubmed.ncbi.nlm.nih.gov/39307908) | The study reports quantitative PK parameters (clearance, absorption rates) for finerenone in rats, but specific numeric values for the control group are not explicitly listed in the text, only relative changes. |
| `Eissing_2024.pdf` | Eissing T et al., Pharmacokinetics and pharmacodynamics o…, Diabetes, obesity & metabol… (2024) | popPK | 10 | [10.1111/dom.15387](https://doi.org/10.1111/dom.15387) | [38037539](https://pubmed.ncbi.nlm.nih.gov/38037539) | The paper describes a population PK/PD model for finerenone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

<sub>queue written 2026-10-06T18:29:07.550654+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2026 | irrelevant | 0 | 0 | The paper is a clinical trial analysis focusing on blood pressure and albuminuria outcomes, containing no pharmacokinetic parameters for finerenone. |
| PGx | Bajinka_2025 | not_relevant | 0 | 0 | The paper is a review of 3PM in hypertension that mentions finerenone only as a novel therapy for personalized efficacy, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Bui_2024 | relevant | 10 | 4 | The study reports quantitative PK parameters (clearance, absorption rates) for finerenone in rats, but specific numeric values for the control group are not explicitly listed in the text, only relative changes. |
| PGx | Bui_2024 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibitors) in rats, not pharmacogenomic effects of gene variants on finerenone PK/PD. |
| popPK | Eissing_2024 | relevant | 10 | 0 | The paper describes a population PK/PD model for finerenone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |
| popPK | Goulooze_2022 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic (PD) modeling of UACR and eGFR, using finerenone PK parameters from a separate published study rather than reporting new quantitative PK disposition parameters (CL, V, etc.) in the text. |
| popPK | Goulooze_2022_2 | relevant | 8 | 2 | The paper describes a population PK/PD model for finerenone and mentions a clearance of 28.0 L/h and half-life of 2.7 h, but the full quantitative parameter estimates (CL, V, Q, etc.) are referenced as being in a separate publication (van den Berg et al.) or supplementary material not fully provided here. |
| popPK | Hashimoto_2026 | irrelevant | 0 | 0 | The study is a clinical safety cohort analyzing hyperkalemia risk and serum potassium trajectories, not a pharmacokinetic study reporting disposition parameters for finerenone. |
| popPK | Heerspink_2026_2 | irrelevant | 0 | 0 | The paper is a clinical outcome trial reporting eGFR slopes and event rates, not pharmacokinetic parameters. |
| PGx | Heinig_2018 | not_relevant | 0 | 0 | The text describes a standard in vitro method for determining blood-plasma partitioning and does not report any pharmacogenomic effects or genetic variants. |
| PGx | Heinig_2020 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP inhibition/induction) of finerenone, not the effect of genetic variants on finerenone's pharmacokinetics or pharmacodynamics. |
| PGx | Heinig_2023 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of finerenone in special populations (renal/hepatic impairment, age, sex, ethnicity) and drug-drug interactions, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial reporting proteinuria and eGFR changes, not a pharmacokinetic study with disposition parameters. |
| popPK | Mottl_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of finerenone on albuminuria and kidney outcomes, containing no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Snelder_2020 | relevant | 10 | 2 | The paper is a population PK study of finerenone, but the specific numeric parameter estimates (CL, V, etc.) are explicitly stated to be in ESM Table S1, which is not included in the provided evidence. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (finerenone inhibiting acalabrutinib metabolism) and does not investigate the effect of any gene variant or genotype on the pharmacokinetics or pharmacodynamics of finerenone. |
| PGx | Wendl_2022 | not_relevant | 0 | 0 | The paper reports a PBPK model for CYP3A4-mediated drug-drug interactions, not pharmacogenomic effects of gene variants on finerenone PK/PD. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic drug-drug interactions (CYP3A inhibition/induction) for finerenone, not pharmacogenomic effects based on gene variants. |
| PD | van_2022 | not_relevant | 0 | 0 | not captured |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 18:29 UTC</sub>
