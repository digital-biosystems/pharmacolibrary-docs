<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;aprotinin&quot;}]"></div>

# aprotinin

- **generic name:** aprotinin
- **ATC codes:** `B02AB01`
- **DrugBank:** [DB06692](https://go.drugbank.com/drugs/DB06692) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Aprotinin is an antifibrinolytic drug that was used to reduce bleeding. It has been withdrawn from the market, although it remains approved in some settings and has been studied investigationally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418625](https://www.wikidata.org/wiki/Q418625) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aprotinin | parent | 6511.51 | C284H432N84O79S7 | PubChem | [16130295](https://pubchem.ncbi.nlm.nih.gov/compound/16130295) | Tae_2011 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | — | L/h | 0.403 | neonates and young infants undergoing cardiopulmonary bypass | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tae_2011_estimate_se](drugs/drug_aprotinin/Aprotinin_Tae2011_estimate_se.md) |
| CL | CL | — | L/h | 0.544 | neonates and young infants undergoing cardiopulmonary bypass | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tae_2011_median](drugs/drug_aprotinin/Aprotinin_Tae2011_median.md) |
| V | V | — | L | 0.751 | neonates and young infants undergoing cardiopulmonary bypass | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tae_2011_estimate_se](drugs/drug_aprotinin/Aprotinin_Tae2011_estimate_se.md) |
| V | V | — | L | 0.761 | neonates and young infants undergoing cardiopulmonary bypass | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tae_2011_median](drugs/drug_aprotinin/Aprotinin_Tae2011_median.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub> | [Tae_2011_estimate_se](drugs/drug_aprotinin/Aprotinin_Tae2011_estimate_se.md) | — | 1-compartment (no model) | 3 | Tae YM et al., Population pharmacokinetic analysis and…, Journal of clinical pharmac… (2011) | [10.1177/0091270010379411](https://doi.org/10.1177/0091270010379411) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.6062)</sub> | [↳ median](drugs/drug_aprotinin/Aprotinin_Tae2011_median.md) | — | 1-compartment (no model) | 3 |  |  |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SERPINE1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sirgo_2009](drugs/drug_aprotinin/pgx_Sirgo_2009_SERPINE1_Q100.md) | Sirgo G et al., PAI-1 gene: pharmacogenetic association…, European journal of anaesth… (2009) | [10.1097/EJA.0b013e3283240412](https://doi.org/10.1097/EJA.0b013e3283240412) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aprotinin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CTRB1 (unknown), KLK1 (unknown), PLG (unknown), PRSS1 (unknown), SERPINE1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:43 | 9:26 | 2/0/0 | 0/0/0 | 0/0/1 | 126,384/29,019 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 6/1 | 1/6 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mary_1984.pdf` | Mary A et al., [In vitro aggregation of rat platelets…, Comptes rendus des seances… (1984) | pd | 4 | not captured | [6085483](https://www.ncbi.nlm.nih.gov/pubmed/6085483) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-05T16:35:08.950906+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Amara_2010 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect of lisinopril on aprotinin catabolism, but the reported genetic association (rs699) is with proteinuria reduction, not with the aprotinin PK/PD parameter. |
| popPK | Bianchi_1984 | irrelevant | 2 | 2 | The study focuses on aprotinin as a radiolabeled imaging tracer (99mTc-Ap) for renal morphology, reporting only plasma clearance of the tracer rather than a full population pharmacokinetic model or disposition parameters for the drug itself. |
| popPK | Glusa_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation mechanisms where aprotinin is used only as a proteinase inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Glusa_1997 | not_relevant | 3 | 2 | The paper reports IC50 values for benzamidine derivatives inhibiting trypsin-induced relaxation, but does not provide a concentration-effect curve or numeric PD parameters specifically for aprotinin. |
| popPK | Grassin-Delyle_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tranexamic acid, not aprotinin. |
| PGx | Ihtasham_2025 | not_relevant | 0 | 0 | The paper is a narrative review of coagulation management strategies and does not report specific pharmacogenomic effects on aprotinin PK/PD parameters. |
| popPK | Janecki_1991 | irrelevant | 0 | 0 | The study is an in vitro investigation of Sertoli cell tight junctions where aprotinin is used only as a non-specific antiprotease control, not as the subject of pharmacokinetic analysis. |
| popPK | Kobayashi_1985 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of adenylate cyclase where aprotinin is used only as an inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Kobayashi_1985 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding aprotinin or pharmacodynamics. |
| PGx | Krogh_2008 | not_relevant | 0 | 0 | The paper investigates the production of aprotinin in yeast strains, not the pharmacokinetics or pharmacodynamics of aprotinin in humans. |
| popPK | Marchetti_2003 | irrelevant | 0 | 0 | The study investigates the mechanism of angiotensin I action in rat arterioles using aprotinin as a protease inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Marchetti_2003 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Emax) for Angiotensin I and II, but explicitly states that aprotinin had no effect on the response, providing no exposure-response or dose-response relationship for aprotinin. |
| popPK | Mary_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report pharmacokinetic parameters for aprotinin. |
| PD | Mary_1984 | not_relevant | 4 | 2 | The text describes a qualitative in vitro dose-response analysis (non-competitive antagonism) but does not provide specific numeric PD parameters (Emax, EC50 values) or data points to derive them. |
| popPK | McEvoy_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of aprotinin's effects on cardiac contractility and cytokine release in mice, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PGx | Sacchi_2014 | not_relevant | 0 | 0 | The paper describes a protein engineering strategy for VEGF delivery using a modified aprotinin variant to control fibrin degradation, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of aprotinin. |
| popPK | Seifried_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of recombinant tissue-type plasminogen activator (rt-PA), and aprotinin is only mentioned as a limited utility inhibitor in in vitro assays. |
| popPK | Verstraete_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant tissue-type plasminogen activator (rt-PA), not aprotinin, which is only mentioned as an anticoagulant used in sample collection. |
| PGx | Yeleswarapu_2025 | not_relevant | 0 | 0 | The paper evaluates hydrogel formulations for extracellular vesicle delivery and does not mention aprotinin or any pharmacogenomic effects. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper focuses on corneal wound healing using hydrogels and does not mention aprotinin or any pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 16:35 UTC</sub>
