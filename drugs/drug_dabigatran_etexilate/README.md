<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dabigatran etexilate&quot;}]"></div>

# dabigatran etexilate

- **generic name:** dabigatran etexilate
- **ATC codes:** `B01AE07`
- **DrugBank:** [DB06695](https://go.drugbank.com/drugs/DB06695) · **PubChem:** [CID 6445226](https://pubchem.ncbi.nlm.nih.gov/compound/6445226)
- **molar mass:** 627.7332 g/mol (C34H41N7O5) — DrugBank
- **groups:** approved, investigational

## About

Dabigatran etexilate is a direct thrombin inhibitor anticoagulant used to prevent and treat thrombosis, including venous thromboembolism after joint replacement surgery and stroke risk in atrial fibrillation. It is approved and authorised in the European Union and is widely used as an oral anticoagulant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20078502](https://www.wikidata.org/wiki/Q20078502) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dabigatran etexilate (dabigatran_etexilate) | parent | 627.733 | C34H41N7O5 | DrugBank | [6445226](https://pubchem.ncbi.nlm.nih.gov/compound/6445226) | Kong_2025, Trocóniz_2007 |
| dabigatran | metabolite | 471.521 | C25H25N7O3 | PubChem | [216210](https://pubchem.ncbi.nlm.nih.gov/compound/216210) | Trocóniz_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:47 | 8:33 | 0/8/1 | 2/0/0 | 0/0/0 | 354,420/52,886 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Trocóniz_2007_reference](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Trocniz2007_reference.md) | — | 1-compartment (no model) | 1 | Trocóniz IF et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2007) | [10.1177/0091270006297228](https://doi.org/10.1177/0091270006297228) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kong_2025_reference](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Kong2025_reference.md) | — | parent + metabolite (no model) | 6 | Kong W et al., Microdose Cocktail Study Reveals the Ac…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3546](https://doi.org/10.1002/cpt.3546) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Liu_2022_reference](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Liu2022_reference.md) | — | parent + metabolite (no model) | 0 | Liu YO et al., Population pharmacokinetic analysis for…, Frontiers in cardiovascular… (2022) | [10.3389/fcvm.2022.998751](https://doi.org/10.3389/fcvm.2022.998751) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Röshammar_2021_diversity_nct01895777_aged_birth_to_18_y](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Rshammar2021_diversity_nct01895777_aged.md) | — | 1-compartment (no model) | 0 | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Röshammar_2021_nct00844415_aged_12_to_18_y](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Rshammar2021_nct00844415_aged_12_to_18_y.md) | — | 1-compartment (no model) | 0 | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Röshammar_2021_nct01083732_aged_1_to_12_y](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Rshammar2021_nct01083732_aged_1_to_12_y.md) | — | 1-compartment (no model) | 0 | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Röshammar_2021_nct02044367_aged_18_40_y](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Rshammar2021_nct02044367_aged_18_40_y.md) | — | 1-compartment (no model) | 0 | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Röshammar_2021_nct02197416_a_aged_3_m_to_18_y](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Rshammar2021_nct02197416_a_aged_3_m_to_1.md) | — | 1-compartment (no model) | 0 | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Röshammar_2021_nct02223260_aged_1_y](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Rshammar2021_nct02223260_aged_1_y.md) | — | 1-compartment (no model) | 0 | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Dansirikul_2012_aPTT](drugs/drug_dabigatran_etexilate/pd_Dansirikul_2012_aPTT.md) | activated partial thromboplastin time ← dabigatran · direct linear effect | — | Dansirikul C et al., A combined pharmacometric analysis of d…, Thrombosis and haemostasis (2012) | [10.1160/TH11-09-0656](https://doi.org/10.1160/TH11-09-0656) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Liesenfeld_2006_ECT](drugs/drug_dabigatran_etexilate/pd_Liesenfeld_2006_ECT.md) | ecarin clotting time ← dabigatran · direct linear effect | — | Liesenfeld KH et al., Effects of the direct thrombin inhibito…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02667.x](https://doi.org/10.1111/j.1365-2125.2006.02667.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> | [Liesenfeld_2006_aPTT](drugs/drug_dabigatran_etexilate/pd_Liesenfeld_2006_aPTT.md) | activated partial thromboplastin time ← dabigatran · direct linear effect | — | Liesenfeld KH et al., Effects of the direct thrombin inhibito…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02667.x](https://doi.org/10.1111/j.1365-2125.2006.02667.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dabigatran_etexilate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CES2` substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: F2 (inhibitor), NQO2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 9  ·  extracted 0  ·  needs_review 1  ·  rejected 8  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dansirikul_2012.pdf` | Dansirikul C et al., A combined pharmacometric analysis of d…, Thrombosis and haemostasis (2012) | popPK | 10 | [10.1160/TH11-09-0656](https://doi.org/10.1160/TH11-09-0656) | [22398858](https://pubmed.ncbi.nlm.nih.gov/22398858) | The paper describes a population PK model for dabigatran etexilate (dabigatran) with specific parameters (CL, V, Q, ka) in the abstract, but the actual numeric values are not included in the provided evidence snippet. |
| `Liesenfeld_2011.pdf` | Liesenfeld KH et al., Population pharmacokinetic analysis of…, Journal of thrombosis and h… (2011) | popPK | 10 | [10.1111/j.1538-7836.2011.04498.x](https://doi.org/10.1111/j.1538-7836.2011.04498.x) | [21972820](https://pubmed.ncbi.nlm.nih.gov/21972820) | The paper is a population PK study of dabigatran etexilate, but specific numeric parameter values are not provided in the abstract. |
| `Trocóniz_2007.pdf` | Trocóniz IF et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270006297228](https://doi.org/10.1177/0091270006297228) | [17322149](https://pubmed.ncbi.nlm.nih.gov/17322149) | The paper is a population PK study of dabigatran etexilate (modeled via active metabolite dabigatran) in humans, reporting specific typical values for CL/F and identifying covariates, though other parameters like V and ka are mentioned as estimated without explicit numeric means provided in the text. |
| `Ollier_2015.pdf` | Ollier E et al., In vitro and in vivo evaluation of drug…, Fundamental & clinical phar… (2015) | popPK | 9 | [10.1111/fcp.12154](https://doi.org/10.1111/fcp.12154) | [26392328](https://pubmed.ncbi.nlm.nih.gov/26392328) | The study is a population pharmacokinetic analysis of dabigatran in humans that reports significant quantitative parameters, but the specific numerical values are not present in the provided evidence text. |
| `Lehr_2012.pdf` | Lehr T et al., Dabigatran etexilate in atrial fibrilla…, Journal of clinical pharmac… (2012) | popPK | 7 | [10.1177/0091270011417716](https://doi.org/10.1177/0091270011417716) | [21956604](https://pubmed.ncbi.nlm.nih.gov/21956604) | The study describes a population PK model for dabigatran etexilate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

<sub>queue written 2026-10-14T22:39:04.291868+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dansirikul_2012 | relevant | 10 | 0 | The paper describes a population PK model for dabigatran etexilate (dabigatran) with specific parameters (CL, V, Q, ka) in the abstract, but the actual numeric values are not included in the provided evidence snippet. |
| popPK | Halton_2016 | irrelevant | 4 | 0 | The study describes adolescent PK/PD but relies on existing adult models and reports only sparse concentration metrics without deriving new population PK parameter estimates (CL, V, Q, ka). |
| popPK | Kumar_2017 | irrelevant | 4 | 3 | The study reports relative percent changes in exposure (AUC, Cmax) and half-life rather than absolute quantitative disposition parameters (CL, V, ka). |
| popPK | Lehr_2012 | relevant | 7 | 0 | The study describes a population PK model for dabigatran etexilate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| popPK | Liesenfeld_2006 | irrelevant | 1 | 0 | The study reports population pharmacodynamic (PD) parameters (EC50, Emax, slope) for coagulation endpoints but does not report quantitative pharmacokinetic (PK) disposition parameters (clearance, volume) for the drug. |
| popPK | Liesenfeld_2011 | relevant | 10 | 2 | The paper is a population PK study of dabigatran etexilate, but specific numeric parameter values are not provided in the abstract. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | This is a simulation/safety study regarding missed doses that relies on previously published PK parameters, does not report new quantitative disposition parameters, and does not include the specific numeric values for dabigatran etexilate in the evidence. |
| popPK | Mitchell_2022 | irrelevant | 0 | 0 | The paper reports population pharmacodynamic (PD) models for coagulation parameters (aPTT, dTT, ECT) rather than pharmacokinetic (PK) disposition parameters for dabigatran. |
| popPK | Ollier_2015 | relevant | 9 | 0 | The study is a population pharmacokinetic analysis of dabigatran in humans that reports significant quantitative parameters, but the specific numerical values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:40 UTC</sub>
