<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;amrubicin&quot;}]"></div>

# amrubicin

- **generic name:** amrubicin
- **ATC codes:** `L01DB10`
- **DrugBank:** [DB06263](https://go.drugbank.com/drugs/DB06263) · **PubChem:** [CID 3035016](https://pubchem.ncbi.nlm.nih.gov/compound/3035016)
- **molar mass:** 483.473 g/mol (C25H25NO9) — DrugBank
- **groups:** investigational

## About

Amrubicin is an anthracycline chemotherapy drug used to treat lung cancer. Information on the usual route of administration is not provided in the facts. The drug is marked as investigational and was marketed in Japan.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4748723](https://www.wikidata.org/wiki/Q4748723), [Wikipedia](https://en.wikipedia.org/wiki/Amrubicin?oldid=1335518855) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amrubicin | parent | 483.473 | C25H25NO9 | DrugBank | [3035016](https://pubchem.ncbi.nlm.nih.gov/compound/3035016) | Makino_2019 |
| amrubicinol | metabolite | 485.489 | C25H27NO9 | PubChem | [11755113](https://pubchem.ncbi.nlm.nih.gov/compound/11755113) | Makino_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Makino_2019_base](drugs/drug_amrubicin/Amrubicin_Makino2019_base.md) | — | parent + metabolite (no model) | 9 | Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019) | [10.1111/cas.14194](https://doi.org/10.1111/cas.14194) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ final](drugs/drug_amrubicin/Amrubicin_Makino2019_final.md) | — | parent + metabolite (no model) | 10 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Makino_2019_ANC](drugs/drug_amrubicin/pd_Makino_2019_ANC.md) | absolute neutrophil count ← amrubicinol · direct linear effect | — | Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019) | [10.1111/cas.14194](https://doi.org/10.1111/cas.14194) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC28A3** | `Q47` · kel | transport | [Makino_2019](drugs/drug_amrubicin/pgx_Makino_2019_SLC28A3_Q47.md) | Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019) | [10.1111/cas.14194](https://doi.org/10.1111/cas.14194) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:35 | 0:05 | 0/2/0 | 1/0/0 | 0/0/1 | 4,012/361 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kimura_2009 | irrelevant | 3 | 0 | The study focuses on pharmacodynamic correlations of the metabolite AMR-OH with toxicity rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for amrubicin. |
| PGx | Kimura_2009 | not_relevant | 0 | 0 | The study investigates the relationship between plasma metabolite concentration and toxicity without analyzing any genetic variants or genotypes. |
| popPK | Makino_2012 | relevant | 10 | 2 | The study reports quantitative PK parameters (clearance, AUC) for amrubicin using a 3-compartment model, but the specific numeric values are not present in the provided abstract text. |
| PGx | Makino_2012 | not_relevant | 0 | 0 | The study characterizes general PK/PD relationships and toxicity correlations but does not report any effects of gene variants, genotypes, or phenotypes. |
| popPK | Makino_2016 | relevant | 9 | 4 | The paper describes a population PK model for amrubicin in humans, but specific parameter values (CL, V, Q) are not explicitly listed in the provided text, only model structure and AIC optimization results. |
| PGx | Makino_2016 | not_relevant | 0 | 0 | The paper describes the optimization of sampling points for pharmacokinetic analysis in a general cohort, containing no data on gene variants or genotypes affecting drug parameters. |
| popPK | Yanaihara_2007 | irrelevant | 1 | 0 | This is a Phase I clinical trial focused on dose escalation and toxicity, and while it mentions amrubicin did not affect CPT-11 PK, it does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for amrubicin itself. |
| PGx | Yanaihara_2007 | not_relevant | 0 | 0 | The study focuses on dose-finding and drug interactions, not on how genetic variants affect amrubicin pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamrubicin%5D&body=Drug%3A%20amrubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amrubicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 10:23 UTC</sub>
