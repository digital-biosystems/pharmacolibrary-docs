<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pertuzumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pertuzumab_Luo2017_reference&quot;,&quot;label&quot;:&quot;Luo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sakaeda2024_10_mg_kg_iv&quot;,&quot;label&quot;:&quot;Sakaeda_2024_10_mg_kg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pertuzumab

- **generic name:** pertuzumab
- **ATC codes:** `L01FD02`, `L01FY01`
- **DrugBank:** [DB06366](https://go.drugbank.com/drugs/DB06366) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pertuzumab is a monoclonal antibody that blocks HER2 and is used to treat breast cancer. It is an approved medicine, authorised in the European Union for breast cancer, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1998021](https://www.wikidata.org/wiki/Q1998021) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:55 | 23:53 | 2/4/8 | 4/0/1 | 0/0/0 | 449,160/52,321 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/9 | 11/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Luo_2017_reference](drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Luo C et al., Glycoengineering of pertuzumab and its…, Scientific reports (2017) | [10.1038/srep46347](https://doi.org/10.1038/srep46347) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Sakaeda_2024_10_mg_kg_iv](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md) | ▶ model + simulator | 1-compartment, IV | 9 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.5096)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2021_reference](drugs/drug_pertuzumab/Pertuzumab_Liu2021_reference.md) | — | 1-compartment (no model) | 2 | Liu SN et al., Impact of Dose Delays and Alternative D…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1855](https://doi.org/10.1002/jcph.1855) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sakaeda_2024_108_mg_0_u_rhuph20](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_108_mg_0_u_rhuph20.md) | — | 1-compartment (no model) | 5 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sakaeda_2024_108_mg_2_000_u_rhuph20](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_108_mg_2_000_u_rhuph20.md) | — | 1-compartment (no model) | 5 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sakaeda_2024_108_mg_6_000_u_rhuph20](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_108_mg_6_000_u_rhuph20.md) | — | 1-compartment (no model) | 5 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Sakaeda_2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u_rhuph20_sc](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u.md) | — | 1-compartment (no model) | 8 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Sakaeda_2024_120_mg_2_000_u_rhuph20_sc](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_sc.md) | — | 1-compartment (no model) | 8 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sakaeda_2024_216_mg_4_000_u_rhuph20](drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_216_mg_4_000_u_rhuph20.md) | — | 1-compartment (no model) | 4 | Sakaeda M et al., [Pharmacological properties and clinica…, Nihon yakurigaku zasshi. Fo… (2024) | [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_reference](drugs/drug_pertuzumab/Pertuzumab_Wang2021_reference.md) | — | 2-compartment (no model) | 5 (+1 cov.) | Wang B et al., Population pharmacokinetic and explorat…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04296-0](https://doi.org/10.1007/s00280-021-04296-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Adams_2006_reference](drugs/drug_pertuzumab/Pertuzumab_Adams2006_reference.md) | — | 1-compartment (no model) | 0 | Adams CW et al., Humanization of a recombinant monoclona…, Cancer immunology, immunoth… (2006) | [10.1007/s00262-005-0058-x](https://doi.org/10.1007/s00262-005-0058-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Garg_2014_reference](drugs/drug_pertuzumab/Pertuzumab_Garg2014_reference.md) | — | 1-compartment (no model) | 0 | Garg A et al., Population pharmacokinetic and covariat…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2560-3](https://doi.org/10.1007/s00280-014-2560-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kirschbrown_2019_reference](drugs/drug_pertuzumab/Pertuzumab_Kirschbrown2019_reference.md) | — | 1-compartment (no model) | 0 | Kirschbrown WP et al., Pharmacokinetic and exploratory exposur…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03826-1](https://doi.org/10.1007/s00280-019-03826-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Quartino_2017_reference](drugs/drug_pertuzumab/Pertuzumab_Quartino2017_reference.md) | — | 1-compartment (no model) | 0 | Quartino AL et al., Pharmacokinetic and exposure-response a…, Cancer chemotherapy and pha… (2017) | [10.1007/s00280-016-3218-0](https://doi.org/10.1007/s00280-016-3218-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Garg_2013_QTcF](drugs/drug_pertuzumab/pd_Garg_2013_QTcF.md) | ΔQTcF ← pertuzumab · direct linear effect | — | Garg A et al., Exposure-response analysis of pertuzuma…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-013-2279-6](https://doi.org/10.1007/s00280-013-2279-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Quartino_2017_pCR](drugs/drug_pertuzumab/pd_Quartino_2017_pCR.md) | pathological complete response ← pertuzumab · direct linear effect | — | Quartino AL et al., Pharmacokinetic and exposure-response a…, Cancer chemotherapy and pha… (2017) | [10.1007/s00280-016-3218-0](https://doi.org/10.1007/s00280-016-3218-0) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xu_2018_diarrhea_events](drugs/drug_pertuzumab/pd_Xu_2018_diarrhea_events.md) | diarrhea events ← pertuzumab · direct Emax (saturable) effect | — | Xu C et al., A continuous-time multistate Markov mod…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3621-9](https://doi.org/10.1007/s00280-018-3621-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yao_2022_ADCC](drugs/drug_pertuzumab/pd_Yao_2022_ADCC.md) | ADCC activity biomarker turnover ← pertuzumab | — | Yao B et al., Drifts in N-Linked Glycosylation Result…, BioMed research internation… (2022) | [10.1155/2022/7868391](https://doi.org/10.1155/2022/7868391) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2021_tpCR](drugs/drug_pertuzumab/pd_Wang_2021_tpCR.md) | total pathologic complete response ← pertuzumab · categorical (graded) response model | — | Wang B et al., Population pharmacokinetic and explorat…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04296-0](https://doi.org/10.1007/s00280-021-04296-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pertuzumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ERBB2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 14  ·  extracted 2  ·  needs_review 8  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adams_2006.pdf` | Adams CW et al., Humanization of a recombinant monoclona…, Cancer immunology, immunoth… (2006) | popPK | 9 | [10.1007/s00262-005-0058-x](https://doi.org/10.1007/s00262-005-0058-x) | [16151804](https://pubmed.ncbi.nlm.nih.gov/16151804) | The abstract reports specific quantitative PK parameters (two-compartment model, t1/2 ~10 days, Vd ~40 mL/kg) for pertuzumab in cynomolgus monkeys. |
| `Cortés_2013.pdf` | Cortés J et al., Absence of pharmacokinetic drug-drug in…, Anti-cancer drugs (2013) | popPK | 6 | [10.1097/CAD.0000000000000016](https://doi.org/10.1097/CAD.0000000000000016) | [23969513](https://pubmed.ncbi.nlm.nih.gov/23969513) | The study reports non-compartmental PK parameters (Cmin, Cmax) for pertuzumab in humans, but lacks specific clearance or volume values and relies on a referenced population model not detailed in the text. |

<sub>queue written 2026-10-07T18:33:55.312298+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cortés_2013 | relevant | 6 | 2 | The study reports non-compartmental PK parameters (Cmin, Cmax) for pertuzumab in humans, but lacks specific clearance or volume values and relies on a referenced population model not detailed in the text. |
| popPK | Garg_2013 | irrelevant | 2 | 0 | The study is a QTc safety substudy that reports observed drug concentrations but does not provide quantitative pharmacokinetic disposition parameters (CL, V, t1/2) or a population PK model for pertuzumab. |
| popPK | Kirschbrown_2019_2 | relevant | 5 | 2 | The study reports observed PK summary statistics (Cmax, Cmin) for pertuzumab but does not provide compartmental model parameters (CL, V, Q) or half-life in the text. |
| popPK | LoRusso_2011 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of trastuzumab emtansine (T-DM1), not pertuzumab, which is only mentioned as a comparator or combination agent. |
| popPK | Luo_2017 | relevant | 8 | 2 | The study reports quantitative PK parameters (CL, V1, Vss, half-life) for pertuzumab glycoforms in mice, but the specific numeric values are contained in Table 2 and Figure 6, which are not included in the provided evidence. |
| popPK | Wang_2022 | relevant | 10 | 2 | The paper is a correction to a population PK study of pertuzumab, but the provided evidence only contains fragments of equations and a single Q value, lacking the full set of quantitative parameters. |
| popPK | Xu_2018 | irrelevant | 2 | 0 | The study focuses on a PK-toxicity (diarrhea) model for lumretuzumab and pertuzumab, not on the quantitative disposition parameters (CL, V, etc.) of pertuzumab itself. |
| popPK | Yao_2022 | irrelevant | 0 | 0 | The paper is a physicochemical characterization study of pertuzumab lots (glycosylation, purity, ADCC potency) and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study focuses on tumor stiffness and biomarkers for predicting response to therapy, not on the pharmacokinetics of pertuzumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:35 UTC</sub>
