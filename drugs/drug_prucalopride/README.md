<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;prucalopride&quot;}]"></div>

# prucalopride

- **generic name:** prucalopride
- **ATC codes:** `A06AX05`
- **DrugBank:** [DB06480](https://go.drugbank.com/drugs/DB06480) · **PubChem:** [CID 3052762](https://pubchem.ncbi.nlm.nih.gov/compound/3052762)
- **molar mass:** 367.87 g/mol (C18H26ClN3O3) — DrugBank
- **groups:** approved, investigational

## About

Prucalopride is a laxative used to treat chronic constipation. It is an authorised medicine in the European Union and is approved for use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q68484](https://www.wikidata.org/wiki/Q68484) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prucalopride | parent | 367.87 | C18H26ClN3O3 | DrugBank | [3052762](https://pubchem.ncbi.nlm.nih.gov/compound/3052762) | van_2016 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| ka | kabs | 0.792 | 1/h | 0.792 h−1 | children with functional constipation | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [van_2016_estimate](drugs/drug_prucalopride/Prucalopride_van2016_estimate.md) |
| F | Fab | 0.858 |  | 0.858 | children with functional constipation | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [van_2016_estimate](drugs/drug_prucalopride/Prucalopride_van2016_estimate.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [van_2016_estimate](drugs/drug_prucalopride/Prucalopride_van2016_estimate.md) | — | 1-compartment (no model) | 7 | van Schaick E et al., Development of a population pharmacokin…, Pharmacology research & per… (2016) | [10.1002/prp2.236](https://doi.org/10.1002/prp2.236) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ pru_usa_12](drugs/drug_prucalopride/Prucalopride_van2016_pru_usa_12.md) | — | 1-compartment (no model) | 3 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ spd555_303](drugs/drug_prucalopride/Prucalopride_van2016_spd555_303.md) | — | 1-compartment (no model) | 5 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [Broad_2013_EFS_evoked_AUC](drugs/drug_prucalopride/pd_Broad_2013_EFS_evoked_AUC.md) | cholinergically mediated contractions ← prucalopride · direct Emax (saturable) effect | — | Broad J et al., Cholinergic interactions between donepe…, British journal of pharmaco… (2013) | [10.1111/bph.12397](https://doi.org/10.1111/bph.12397) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prucalopride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:49 | 5:51 | 1/2/0 | 1/0/0 | 0/0/0 | 107,074/15,136 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2020.pdf` | Zhou Z et al., Pharmacokinetics, Bioequivalence, and S…, Clinical pharmacology in dr… (2020) | popPK | 8 | [10.1002/cpdd.754](https://doi.org/10.1002/cpdd.754) | [31797570](https://pubmed.ncbi.nlm.nih.gov/31797570) | The study reports a 2-compartment model for prucalopride in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only bioequivalence ratios. |
| `Broad_2014.pdf` | Broad J et al., Drugs acting at 5-HT4 , D2 , motilin, a…, Neurogastroenterology and m… (2014) | pd | 4 | [10.1111/nmo.12338](https://doi.org/10.1111/nmo.12338) | [24750304](https://www.ncbi.nlm.nih.gov/pubmed/24750304) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-04T16:44:36.877796+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Broad_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prucalopride's effect on human colonic muscle contractions, reporting efficacy (EC50/Emax) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Broad_2014 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Broad_2014 | not_relevant | 0 | 0 | The paper investigates neuromuscular functions in isolated stomachs using various receptor agonists but does not report pharmacokinetic or pharmacodynamic data for prucalopride. |
| popPK | De_2006 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of receptor agonism in pig tissues, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels in rabbit smooth muscle, not a pharmacokinetic study, and prucalopride is only used as a negative control. |
| PD | Kim_2016 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, Hill coefficient) for cisapride, but explicitly states that prucalopride did not affect the basal Kv current, providing no numeric PD relationship for prucalopride. |
| popPK | LePard_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of synaptic transmission in guinea pig ileum, not a pharmacokinetic study, and reports no disposition parameters for prucalopride. |
| PD | LePard_2004 | not_relevant | 3 | 2 | The paper reports a single-point effect (30-33% potentiation) for prucalopride without providing a concentration-response curve, EC50, or other numeric PD parameters. |
| popPK | Lefebvre_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of prucalopride's effect on acetylcholine release and contractility, not a pharmacokinetic study reporting disposition parameters. |
| PD | Lefebvre_2010 | not_relevant | 4 | 2 | The paper reports qualitative maintenance of prucalopride's effect in endometriosis but does not provide numeric PD parameters (EC50/Emax) for prucalopride itself, only for carbachol. |
| PGx | Manabe_2010 | not_relevant | 0 | 0 | The paper is a review of 5-HT4 receptor agonists and does not report any pharmacogenomic effects on prucalopride PK or PD parameters. |
| PGx | Mearin_2012 | not_relevant | 0 | 0 | The paper is a general summary of a gastroenterology congress and mentions prucalopride only in the context of safety and efficacy for constipation, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Zhou_2020 | relevant | 8 | 2 | The study reports a 2-compartment model for prucalopride in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only bioequivalence ratios. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 16:44 UTC</sub>
