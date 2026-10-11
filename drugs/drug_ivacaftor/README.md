<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;ivacaftor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivacaftor_Truong2025_reference&quot;,&quot;label&quot;:&quot;Truong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ivacaftor

- **generic name:** ivacaftor
- **ATC codes:** `R07AX02`, `R07AX30`, `R07AX31`
- **DrugBank:** [DB08820](https://go.drugbank.com/drugs/DB08820) · **PubChem:** [CID 16220172](https://pubchem.ncbi.nlm.nih.gov/compound/16220172)
- **molar mass:** 392.4907 g/mol (C24H28N2O3) — DrugBank
- **groups:** approved, investigational

## About

Ivacaftor is a medicine used to treat cystic fibrosis. It is authorised in the European Union and is an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6095693](https://www.wikidata.org/wiki/Q6095693) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ivacaftor | parent | 392.491 | C24H28N2O3 | DrugBank | [16220172](https://pubchem.ncbi.nlm.nih.gov/compound/16220172) | Truong_2025, Vonk_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:02 | 2:35 | 1/7/1 | 0/0/0 | 0/0/0 | 242,174/11,109 | einfracz / qwen3.8-27b | 13 | 4/3 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.692). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Truong_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Truong NH et al., Elexacaftor/Tezacaftor/Ivacaftor Popula…, Clinical and translational… (2025) | [10.1111/cts.70245](https://doi.org/10.1111/cts.70245) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Vonk_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_reference.md) | — | — (no model) | 0 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Magnas_2026_reference](drugs/drug_ivacaftor/Ivacaftor_Magnas2026_reference.md) | — | 1-compartment (no model) | 0 | Magnas P et al., Pregnancy-related effect on elexacaftor…, British journal of clinical… (2026) | [10.1002/bcp.70620](https://doi.org/10.1002/bcp.70620) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sanders_2026_2_reference](drugs/drug_ivacaftor/Ivacaftor_Sanders2026v2_reference.md) | — | 1-compartment (no model) | 0 | Sanders M et al., Evaluation of the drug interaction betw…, Journal of cystic fibrosis… (2026) | [10.1016/j.jcf.2025.09.002](https://doi.org/10.1016/j.jcf.2025.09.002) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025_elexacaftor_m23](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_elexacaftor_m23.md) | — | 2-compartment (no model) | 5 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025_ivacaftor](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor.md) | — | 2-compartment (no model) | 5 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025_ivacaftor_m1](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor_m1.md) | — | 2-compartment (no model) | 5 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025_ivacaftor_m6](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor_m6.md) | — | 2-compartment (no model) | 5 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025_tezacaftor_m1](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_tezacaftor_m1.md) | — | 2-compartment (no model) | 5 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ivacaftor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` carrier, `ORM1` carrier | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CFTR (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 9  ·  extracted 1  ·  needs_review 0  ·  rejected 7  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouazza_2024.pdf` | Bouazza N et al., Lumacaftor/Ivacaftor Population Pharmac…, Clinical pharmacokinetics (2024) | popPK | 9 | [10.1007/s40262-023-01342-3](https://doi.org/10.1007/s40262-023-01342-3) | [38310629](https://pubmed.ncbi.nlm.nih.gov/38310629) | The study describes population PK for ivacaftor, but no specific numeric parameter values are present in the provided evidence. |
| `Guimbellot_2025.pdf` | Guimbellot JS et al., Elexacaftor-tezacaftor-ivacaftor pharma…, Journal of cystic fibrosis… (2025) | popPK | 9 | [10.1016/j.jcf.2025.03.010](https://doi.org/10.1016/j.jcf.2025.03.010) | [40121139](https://pubmed.ncbi.nlm.nih.gov/40121139) | The study reports quantitative pharmacokinetic parameters (clearance, AUC) for ivacaftor, but the specific numeric values are not provided in the evidence, likely residing in tables or supplementary material. |
| `Sanders_2026_2.pdf` | Sanders M et al., Evaluation of the drug interaction betw…, Journal of cystic fibrosis… (2026) | popPK | 9 | [10.1016/j.jcf.2025.09.002](https://doi.org/10.1016/j.jcf.2025.09.002) | [40957819](https://pubmed.ncbi.nlm.nih.gov/40957819) | The study reports non-compartmental PK parameters (Cmax, AUC) for ivacaftor in humans with specific numeric values for GMRs, although full disposition parameters like CL or V are not explicitly listed. |
| `Magnas_2025.pdf` | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | popPK | 7 | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) | [40405059](https://pubmed.ncbi.nlm.nih.gov/40405059) | The paper is a human population PK study of a combination therapy containing ivacaftor, but the specific numeric PK parameters (CL, V, ka) for ivacaftor are not explicitly listed in the provided text, only AUC ranges. |
| `Magnas_2026.pdf` | Magnas P et al., Pregnancy-related effect on elexacaftor…, British journal of clinical… (2026) | popPK | 7 | [10.1002/bcp.70620](https://doi.org/10.1002/bcp.70620) | [42185741](https://pubmed.ncbi.nlm.nih.gov/42185741) | The study reports quantitative changes in apparent clearance for ivacaftor (9.64 to 11.36 L/h) in a human population PK context. |

<sub>queue written 2026-10-07T18:00:40.893756+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bacalhau_2025 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamics/mechanistic study on CFTR channel potentiators and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for ivacaftor. |
| popPK | Bouazza_2024 | relevant | 9 | 0 | The study describes population PK for ivacaftor, but no specific numeric parameter values are present in the provided evidence. |
| popPK | Froux_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on CFTR channel modulation and pharmacodynamics, containing no pharmacokinetic data for ivacaftor. |
| popPK | Guimbellot_2025 | relevant | 9 | 0 | The study reports quantitative pharmacokinetic parameters (clearance, AUC) for ivacaftor, but the specific numeric values are not provided in the evidence, likely residing in tables or supplementary material. |
| popPK | Hong_2023 | irrelevant | 3 | 0 | The study is a clinical case series with PBPK modeling for dose reduction, not a PK parameter estimation study; no quantitative disposition parameters (CL, V, Q, ka, t1/2) for ivacaftor are reported in the evidence. |
| popPK | Hong_2024 | irrelevant | 4 | 0 | The paper describes a case series and PBPK simulation for elexacaftor/tezacaftor/ivacaftor (ETI) and rifabutin, reporting clinical outcomes (efficacy) rather than quantitative ivacaftor disposition parameters (CL, V, etc.) for ivacaftor monotherapy in the evidence provided. |
| popPK | Magnas_2025 | relevant | 7 | 2 | The paper is a human population PK study of a combination therapy containing ivacaftor, but the specific numeric PK parameters (CL, V, ka) for ivacaftor are not explicitly listed in the provided text, only AUC ranges. |
| popPK | Phuan_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on new CFTR potentiators and does not report pharmacokinetic parameters for ivacaftor. |
| popPK | Sagel_2026 | irrelevant | 0 | 0 | The study investigates inflammatory markers (e.g., NE, IL-8, CRP) and clinical outcomes in CF patients treated with ETI, but reports no pharmacokinetic parameters (CL, V, etc.) for ivacaftor. |
| popPK | Sanders_2026 | irrelevant | 1 | 0 | This is a PBPK modeling study focused on drug-drug interaction ratios and exposure changes, not a primary study reporting base quantitative disposition parameters (CL, V, ka) for ivacaftor. |
| popPK | Semenchuk_2024 | irrelevant | 0 | 0 | The paper is a clinical outcomes study examining lung function and BMI trajectories in CF patients after COVID-19 infection, containing no pharmacokinetic parameter values (CL, V, etc.) for ivacaftor. |
| popPK | Solomon_2024 | irrelevant | 0 | 0 | This is a clinical trial evaluating the efficacy of elexacaftor-tezacaftor-ivacaftor on sweat chloride and lung function, with no report of pharmacokinetic parameters for ivacaftor. |
| popPK | Steinberg_2025 | irrelevant | 0 | 0 | The study focuses on the impact of ETI therapy on the respiratory microbiome in cystic fibrosis patients and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for ivacaftor. |
| popPK | Tsai_2020 | irrelevant | 5 | 3 | The study is a PBPK simulation of drug interactions where ivacaftor is one of several substrates, and the specific quantitative PBPK parameters (CL, V, etc.) are located in Supplementary Table S1 which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:00 UTC</sub>
