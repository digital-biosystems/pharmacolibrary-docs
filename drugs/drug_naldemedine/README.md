<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naldemedine&quot;}]"></div>

# naldemedine

- **generic name:** naldemedine
- **ATC codes:** `A06AH05`
- **DrugBank:** [DB11691](https://go.drugbank.com/drugs/DB11691) · **PubChem:** [CID 54732242](https://pubchem.ncbi.nlm.nih.gov/compound/54732242)
- **molar mass:** 570.646 g/mol (C32H34N4O6) — DrugBank
- **groups:** approved, investigational

## About

Naldemedine is a peripheral opioid receptor antagonist used to treat constipation, particularly opioid-induced constipation. It is an approved medicine, authorised in the European Union for constipation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6960846](https://www.wikidata.org/wiki/Q6960846) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| naldemedine | parent | 570.646 | C32H34N4O6 | DrugBank | [54732242](https://pubchem.ncbi.nlm.nih.gov/compound/54732242) | Kubota_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:53 | 11:36 | 3/0/0 | 1/0/1 | 0/0/2 | 251,790/29,863 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.417). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kubota_2018_1107v9221_phase_2b](drugs/drug_naldemedine/Naldemedine_Kubota2018_1107v9221_phase_2b.md) | held back | 2-compartment, oral | 4 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.385). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kubota_2018_1314v9231_1315v9232_phase_3](drugs/drug_naldemedine/Naldemedine_Kubota2018_1314v9231_1315v9232_phase_3.md) | held back | 2-compartment, oral | 4 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.692). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kubota_2018_estimate](drugs/drug_naldemedine/Naldemedine_Kubota2018_estimate.md) | held back | 2-compartment, oral | 4 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Kanemasa_2020_antiemetic_effect](drugs/drug_naldemedine/pd_Kanemasa_2020_antiemetic_effect.md) | antiemetic effect ← naldemedine · direct Emax (saturable) effect | — | Kanemasa T et al., Preventive effects of naldemedine, peri…, Life sciences (2020) | [10.1016/j.lfs.2020.118048](https://doi.org/10.1016/j.lfs.2020.118048) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kubota_2018_GI_disorders](drugs/drug_naldemedine/pd_Kubota_2018_GI_disorders.md) | gastrointestinal disorders ← naldemedine · categorical (graded) response model | — | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kubota_2018_SBM_responder](drugs/drug_naldemedine/pd_Kubota_2018_SBM_responder.md) | spontaneous bowel movement (SBM) responder ← naldemedine · categorical (graded) response model | — | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCB1** | `Q27` · CL/F | transport | [Nakatsugawa_2024](drugs/drug_naldemedine/pgx_Nakatsugawa_2024_ABCB1_Q27.md) | Nakatsugawa E et al., Impacts of genetic polymorphisms and ca…, Fundamental & clinical phar… (2024) | [10.1111/fcp.12976](https://doi.org/10.1111/fcp.12976) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Nakatsugawa_2024](drugs/drug_naldemedine/pgx_Nakatsugawa_2024_CYP3A5_Q27.md) | Nakatsugawa E et al., Impacts of genetic polymorphisms and ca…, Fundamental & clinical phar… (2024) | [10.1111/fcp.12976](https://doi.org/10.1111/fcp.12976) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=naldemedine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | kidney | `CYP3A5` metabolism | paper PGx gene |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` metabolism, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (substrate), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kanemasa_2020.pdf` | Kanemasa T et al., Preventive effects of naldemedine, peri…, Life sciences (2020) | popPK | 8 | [10.1016/j.lfs.2020.118048](https://doi.org/10.1016/j.lfs.2020.118048) | [32622946](https://pubmed.ncbi.nlm.nih.gov/32622946) | The study is a PK/PD analysis in ferrets, but the evidence only provides PD parameters (ED50, EC50) and lacks specific numeric PK disposition parameters (CL, V, t1/2) for naldemedine. |

<sub>queue written 2026-10-04T16:42:06.462338+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Coluzzi_2022 | not_relevant | 2 | 0 | The paper is a general review of P-glycoprotein and opioids; it mentions naldemedine as a P-gp substrate but does not report specific pharmacogenomic data or quantitative PK/PD effects of gene variants on naldemedine. |
| PGx | De_2025 | not_relevant | 0 | 0 | The paper is a real-world study on healthcare resource utilization and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Gudin_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug and drug-food interactions for PAMORAs and does not report pharmacogenomic effects (gene variants) on naldemedine PK/PD. |
| popPK | Hanamoto_2023 | irrelevant | 0 | 0 | The study is a clinical analysis of analgesic outcomes (NRS scores, MMEs) and does not report any pharmacokinetic parameters for naldemedine. |
| PGx | Hashizume_2021 | not_relevant | 0 | 0 | The study investigates clinical risk factors (drug interactions, opioid duration) for naldemedine-induced diarrhea, not the effect of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kanemasa_2020 | relevant | 8 | 2 | The study is a PK/PD analysis in ferrets, but the evidence only provides PD parameters (ED50, EC50) and lacks specific numeric PK disposition parameters (CL, V, t1/2) for naldemedine. |
| PGx | Makihara_2024 | not_relevant | 0 | 0 | The study focuses on oxycodone tolerability and polypharmacy effects, not the pharmacokinetics or pharmacodynamics of naldemedine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 16:42 UTC</sub>
