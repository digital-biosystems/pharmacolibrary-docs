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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kubota_2018_1107v9221_phase_2b](drugs/drug_naldemedine/Naldemedine_Kubota2018_1107v9221_phase_2b.md) | held back | 2-compartment, oral | 4 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kubota_2018_1314v9231_1315v9232_phase_3](drugs/drug_naldemedine/Naldemedine_Kubota2018_1314v9231_1315v9232_phase_3.md) | held back | 2-compartment, oral | 4 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kubota_2018_estimate](drugs/drug_naldemedine/Naldemedine_Kubota2018_estimate.md) | held back | 2-compartment, oral | 4 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Kanemasa_2020_antiemetic_effect](drugs/drug_naldemedine/pd_Kanemasa_2020_antiemetic_effect.md) | antiemetic effect ← naldemedine · direct Emax (saturable) effect | — | Kanemasa T et al., Preventive effects of naldemedine, peri…, Life sciences (2020) | [10.1016/j.lfs.2020.118048](https://doi.org/10.1016/j.lfs.2020.118048) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Kubota_2018_GI_disorders](drugs/drug_naldemedine/pd_Kubota_2018_GI_disorders.md) | gastrointestinal disorders ← naldemedine · categorical (graded) response model | — | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Kubota_2018_SBM_responder](drugs/drug_naldemedine/pd_Kubota_2018_SBM_responder.md) | spontaneous bowel movement (SBM) responder ← naldemedine · categorical (graded) response model | — | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **ABCB1** | `Q27` · CL/F | transport | [Nakatsugawa_2024](drugs/drug_naldemedine/pgx_Nakatsugawa_2024_ABCB1_Q27.md) | Nakatsugawa E et al., Impacts of genetic polymorphisms and ca…, Fundamental & clinical phar… (2024) | [10.1111/fcp.12976](https://doi.org/10.1111/fcp.12976) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Nakatsugawa_2024](drugs/drug_naldemedine/pgx_Nakatsugawa_2024_CYP3A5_Q27.md) | Nakatsugawa E et al., Impacts of genetic polymorphisms and ca…, Fundamental & clinical phar… (2024) | [10.1111/fcp.12976](https://doi.org/10.1111/fcp.12976) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
