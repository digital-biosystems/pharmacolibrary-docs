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
| 2026-10-15 01:02 | 1:56 | 0/0/1 | 1/0/1 | 0/0/2 | 83,647/13,104 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Kubota_2018_reference](drugs/drug_naldemedine/Naldemedine_Kubota2018_reference.md) | held back | 1-compartment, oral | 3 | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Kanemasa_2020_frequency_and_time_of_retching_and_vomiting](drugs/drug_naldemedine/pd_Kanemasa_2020_frequency_and_time_of_retching_and_vomiting.md) | frequency and time of retching and vomiting ← naldemedine · direct Emax (saturable) effect | — | Kanemasa T et al., Preventive effects of naldemedine, peri…, Life sciences (2020) | [10.1016/j.lfs.2020.118048](https://doi.org/10.1016/j.lfs.2020.118048) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Kubota_2018_GI_disorders](drugs/drug_naldemedine/pd_Kubota_2018_GI_disorders.md) | gastrointestinal disorders ← naldemedine · categorical (graded) response model | — | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Kubota_2018_SBM_responder](drugs/drug_naldemedine/pd_Kubota_2018_SBM_responder.md) | spontaneous bowel movement (SBM) responder ← naldemedine · categorical (graded) response model | — | Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018) | [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q75` · Ct | transport | [Nakatsugawa_2024](drugs/drug_naldemedine/pgx_Nakatsugawa_2024_ABCB1_Q75.md) | Nakatsugawa E et al., Impacts of genetic polymorphisms and ca…, Fundamental & clinical phar… (2024) | [10.1111/fcp.12976](https://doi.org/10.1111/fcp.12976) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q75` · Ct | metabolism | [Nakatsugawa_2024](drugs/drug_naldemedine/pgx_Nakatsugawa_2024_CYP3A5_Q75.md) | Nakatsugawa E et al., Impacts of genetic polymorphisms and ca…, Fundamental & clinical phar… (2024) | [10.1111/fcp.12976](https://doi.org/10.1111/fcp.12976) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naldemedine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | PGx paper |
| absorption | kidney | `ABCB1` transport | PGx paper |
| absorption | liver | `ABCB1` transport | PGx paper |
| absorption | placenta | `ABCB1` transport | PGx paper |
| absorption | small intestine | `ABCB1` transport | PGx paper |
| absorption | testis | `ABCB1` transport | PGx paper |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` metabolism, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCB5 (substrate), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kanemasa_2020.pdf` | Kanemasa T et al., Preventive effects of naldemedine, peri…, Life sciences (2020) | popPK | 5 | [10.1016/j.lfs.2020.118048](https://doi.org/10.1016/j.lfs.2020.118048) | [32622946](https://pubmed.ncbi.nlm.nih.gov/32622946) | The study conducts a PK/PD analysis of naldemedine in ferrets, but specific quantitative disposition parameters (CL, V, half-life) are not provided in the evidence, only EC50 and ED50 values. |

<sub>queue written 2026-10-15T01:00:30.141703+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Coluzzi_2022 | not_relevant | 3 | 0 | The paper is a qualitative review that mentions naldemedine as a P-gp substrate in the context of BBB transport, but it does not provide quantitative data linking specific gene variants to PK or PD parameters of naldemedine. |
| PGx | De_2025 | not_relevant | 0 | 0 | The study is a real-world observational analysis of naldemedine use and healthcare resource utilization, focusing on age subgroups and drug-drug interactions with CYP3A4 modulators, rather than the effect of specific genetic variants (pharmacogenomics) on naldemedine's PK/PD parameters. |
| PGx | Gudin_2020 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug-drug interactions and metabolic pathways for PAMORAs, but it does not report pharmacogenomic effects of gene variants on naldemedine. |
| popPK | Hanamoto_2023 | irrelevant | 0 | 0 | The paper is a clinical outcome study analyzing analgesic efficacy (NRS scores, MMEs) and does not report any pharmacokinetic parameters for naldemedine. |
| PGx | Hashizume_2021 | not_relevant | 0 | 0 | The study investigates non-genetic clinical risk factors for diarrhea, not pharmacogenomic variants. |
| popPK | Kanemasa_2020 | relevant | 5 | 0 | The study conducts a PK/PD analysis of naldemedine in ferrets, but specific quantitative disposition parameters (CL, V, half-life) are not provided in the evidence, only EC50 and ED50 values. |
| PGx | Makihara_2024 | not_relevant | 0 | 0 | The study analyzes the effects of drug-drug interactions (CYP inhibitors) on oxycodone tolerability, not pharmacogenomic effects on naldemedine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:00 UTC</sub>
