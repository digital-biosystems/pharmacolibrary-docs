<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;nalbuphine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalbuphine_Nie2023_reference&quot;,&quot;label&quot;:&quot;Nie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Zhu2024_reference&quot;,&quot;label&quot;:&quot;Zhu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Zhu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nalbuphine

- **generic name:** nalbuphine
- **ATC codes:** `N02AF02`
- **DrugBank:** [DB00844](https://go.drugbank.com/drugs/DB00844) · **PubChem:** [CID 5311304](https://pubchem.ncbi.nlm.nih.gov/compound/5311304)
- **molar mass:** 357.4434 g/mol (C21H27NO4) — DrugBank
- **groups:** approved, investigational

## About

Nalbuphine is an opioid medication used to treat pain. It is an approved analgesic, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q277979](https://www.wikidata.org/wiki/Q277979) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 05:50 | 44:29 | 2/2/7 | 1/1/2 | 0/0/0 | 722,671/49,111 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 5/13 | 17/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span> | [Nie_2023_reference](drugs/drug_nalbuphine/Nalbuphine_Nie2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Nie X et al., Population pharmacokinetics of nalbuphi…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1130287](https://doi.org/10.3389/fphar.2023.1130287) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span> | [Zhu_2024_reference](drugs/drug_nalbuphine/Nalbuphine_Zhu2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhu Y et al., A validated UPLC-MS/MS method for quant…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1432944](https://doi.org/10.3389/fphar.2024.1432944) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Bressolle_2011_basic_model](drugs/drug_nalbuphine/Nalbuphine_Bressolle2011_basic_model.md) | — | 2-compartment (no model) | 5 | Bressolle F et al., Population pharmacokinetics of nalbuphi…, British journal of anaesthe… (2011) | [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Bressolle_2011_final](drugs/drug_nalbuphine/Nalbuphine_Bressolle2011_final.md) | — | 2-compartment (no model) | 5 | Bressolle F et al., Population pharmacokinetics of nalbuphi…, British journal of anaesthe… (2011) | [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Bressolle_2011_iiv](drugs/drug_nalbuphine/Nalbuphine_Bressolle2011_iiv.md) | — | 2-compartment (no model) | 5 | Bressolle F et al., Population pharmacokinetics of nalbuphi…, British journal of anaesthe… (2011) | [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Bressolle_2011_mean](drugs/drug_nalbuphine/Nalbuphine_Bressolle2011_mean.md) | — | 2-compartment (no model) | 7 | Bressolle F et al., Population pharmacokinetics of nalbuphi…, British journal of anaesthe… (2011) | [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: model_quarantined: F, Cl, Vd, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Nie_2023_estimates](drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates.md) | held back | 2-compartment, oral | 5 | Nie X et al., Population pharmacokinetics of nalbuphi…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1130287](https://doi.org/10.3389/fphar.2023.1130287) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: model_quarantined: F, Cl, Vd, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Nie_2023_final](drugs/drug_nalbuphine/Nalbuphine_Nie2023_final.md) | held back | 2-compartment, oral | 5 | Nie X et al., Population pharmacokinetics of nalbuphi…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1130287](https://doi.org/10.3389/fphar.2023.1130287) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.4461)</sub><br><sub>route_to: `human_review`</sub> | [Pfiffner_2022_reference](drugs/drug_nalbuphine/Nalbuphine_Pfiffner2022_reference.md) | — | 1-compartment (no model) | 4 (+3 cov.) | Pfiffner M et al., Pharmacometric Analysis of Intranasal a…, Frontiers in pediatrics (2022) | [10.3389/fped.2022.837492](https://doi.org/10.3389/fped.2022.837492) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Groenendaal_2007_reference](drugs/drug_nalbuphine/Nalbuphine_Groenendaal2007_reference.md) | — | 2-compartment (no model) | 4 | Groenendaal D et al., Population pharmacokinetic modelling of…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707257](https://doi.org/10.1038/sj.bjp.0707257) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Nie_2025_reference](drugs/drug_nalbuphine/Nalbuphine_Nie2025_reference.md) | — | 2-compartment (no model) | 4 | Nie Y et al., Population Pharmacokinetic of Epidural…, Drug design, development an… (2025) | [10.2147/dddt.s500189](https://doi.org/10.2147/dddt.s500189) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_Cough_score](drugs/drug_nalbuphine/pd_Wang_2022_Cough_score.md) | name ← nalbuphine · inhibition effect | — | Wang M et al., A Dose-Response Relationship Study of P…, Drug design, development an… (2022) | [10.2147/DDDT.S356582](https://doi.org/10.2147/DDDT.S356582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_Incidence_of_adverse_reactions](drugs/drug_nalbuphine/pd_Wang_2022_Incidence_of_adverse_reactions.md) | name ← nalbuphine · inhibition effect | — | Wang M et al., A Dose-Response Relationship Study of P…, Drug design, development an… (2022) | [10.2147/DDDT.S356582](https://doi.org/10.2147/DDDT.S356582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_NRS_score](drugs/drug_nalbuphine/pd_Wang_2022_NRS_score.md) | name ← nalbuphine · inhibition effect | — | Wang M et al., A Dose-Response Relationship Study of P…, Drug design, development an… (2022) | [10.2147/DDDT.S356582](https://doi.org/10.2147/DDDT.S356582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_Number_of_postoperative_salvage_analgesia](drugs/drug_nalbuphine/pd_Wang_2022_Number_of_postoperative_salvage_analgesia.md) | name ← nalbuphine · inhibition effect | — | Wang M et al., A Dose-Response Relationship Study of P…, Drug design, development an… (2022) | [10.2147/DDDT.S356582](https://doi.org/10.2147/DDDT.S356582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_Sedation_score](drugs/drug_nalbuphine/pd_Wang_2022_Sedation_score.md) | name ← nalbuphine · inhibition effect | — | Wang M et al., A Dose-Response Relationship Study of P…, Drug design, development an… (2022) | [10.2147/DDDT.S356582](https://doi.org/10.2147/DDDT.S356582) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Pfiffner_2022_NIPS](drugs/drug_nalbuphine/pd_Pfiffner_2022_NIPS.md) | severe pain (NIPS &gt; 4) ← nalbuphine · categorical (graded) response model | — | Pfiffner M et al., Pharmacometric Analysis of Intranasal a…, Frontiers in pediatrics (2022) | [10.3389/fped.2022.837492](https://doi.org/10.3389/fped.2022.837492) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2025_catheter_related_bladder_discomfort](drugs/drug_nalbuphine/pd_Tang_2025_catheter_related_bladder_discomfort.md) | name ← nalbuphine · categorical (graded) response model | — | Tang J et al., Dose-Response Analysis of Nalbuphine fo…, Drug design, development an… (2025) | [10.2147/DDDT.S511613](https://doi.org/10.2147/DDDT.S511613) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Li_2025_unknown](drugs/drug_nalbuphine/pd_Li_2025_unknown.md) | response to cervical dilation ← propofol · direct sigmoid Emax (Hill) effect | — | Li SX et al., Comparison of intravenous nalbuphine an…, BMC anesthesiology (2025) | [10.1186/s12871-025-03208-6](https://doi.org/10.1186/s12871-025-03208-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nalbuphine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 72 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 11  ·  extracted 2  ·  needs_review 7  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eudy-Byrne_2023.pdf` | Eudy-Byrne R et al., A population pharmacokinetic-pharmacody…, British journal of clinical… (2023) | pd | 5 | [10.1111/bcp.15663](https://doi.org/10.1111/bcp.15663) | [36680419](https://www.ncbi.nlm.nih.gov/pubmed/36680419) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Groenendaal_2008.pdf` | Groenendaal D et al., Pharmacokinetic/pharmacodynamic modelli…, European journal of pharmac… (2008) | pd | 5 | [10.1016/j.ejps.2008.03.003](https://doi.org/10.1016/j.ejps.2008.03.003) | [18467078](https://www.ncbi.nlm.nih.gov/pubmed/18467078) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Obeng_2021.pdf` | Obeng S et al., Pharmacological Comparison of Mitragyni…, The Journal of pharmacology… (2021) | pd | 4 | [10.1124/jpet.120.000189](https://doi.org/10.1124/jpet.120.000189) | [33384303](https://www.ncbi.nlm.nih.gov/pubmed/33384303) | metadata signals extractable PD data (Emax) |
| `Liang_2020.pdf` | Liang RJ et al., A dual system platform for drug metabol…, European journal of pharmac… (2020) | pgx | 7 | [10.1016/j.ejps.2019.105093](https://doi.org/10.1016/j.ejps.2019.105093) | [31648049](https://www.ncbi.nlm.nih.gov/pubmed/31648049) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Wang_2014.pdf` | Wang HJ et al., Commonly used excipients modulate UDP-g…, Pharmaceutical research (2014) | pgx | 7 | [10.1007/s11095-013-1272-4](https://doi.org/10.1007/s11095-013-1272-4) | [24526241](https://www.ncbi.nlm.nih.gov/pubmed/24526241) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |

<sub>queue written 2026-08-28T05:21:14.582961+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Burgess_2024 | not_relevant | 4 | 2 | The paper reports a dose-response relationship for nalbuphine in a drug discrimination assay, but it does not provide numeric PD parameters (e.g., ED50, Emax) or a concentration-effect curve in the text, only qualitative descriptions of shifts and generalization. |
| popPK | Cantin_2024 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on neonatal withdrawal from SSRI exposure and mentions nalbuphine only as a comparator opioid in the context of confounding, without reporting any pharmacokinetic parameters. |
| PD | Cantin_2024 | not_relevant | 0 | 0 | The paper is a retrospective cohort study on SSRI-exposed neonates examining feeding methods; it does not involve nalbuphine or report any pharmacodynamic or exposure-response relationships. |
| popPK | Groenendaal_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine, and nalbuphine is only mentioned in the introduction as a comparator for P-glycoprotein affinity without any reported PK parameters. |
| PD | Groenendaal_2007 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetic modeling of morphine brain distribution and does not report any pharmacodynamic or exposure-response relationship for nalbuphine. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is a dose-response analysis of propofol EC50 with nalbuphine as a co-administered agent, and does not report pharmacokinetic parameters (CL, V, ka, etc.) for nalbuphine. |
| PGx | Nagar_2024 | not_relevant | 0 | 0 | The paper investigates the impact of hepatic impairment (Child-Pugh A/B/C) on nalbuphine PK, not the effect of specific gene variants or genotypes. |
| PD | Nie_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for nalbuphine but does not include any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Nie_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sufentanil, not nalbuphine, which is only mentioned as a comparator in a previous trial. |
| PD | Nie_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for sufentanil, not nalbuphine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Shameer_2018 | irrelevant | 0 | 0 | The paper is a database analysis of drug repositioning and does not report pharmacokinetic parameters for nalbuphine. |
| PD | Shameer_2018 | not_relevant | 0 | 0 | The paper describes a database for drug repositioning and does not contain any pharmacodynamic or exposure-response analysis for nalbuphine. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for pyrotinib, not nalbuphine. |
| PD | Zhu_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) study for pyrotinib, not nalbuphine, and contains no pharmacodynamic (PD) or exposure-response modeling. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-08-28 05:26 UTC</sub>
