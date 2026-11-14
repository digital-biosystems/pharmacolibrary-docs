<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Calcipotriol&quot;}]"></div>

# Calcipotriol

- **generic name:** Calcipotriol
- **T3DB:** [T3D3062](http://www.t3db.ca/toxins/T3D3062) · **DrugBank:** [DB02300](https://go.drugbank.com/drugs/DB02300) · **PubChem:** [CID 5288783](https://pubchem.ncbi.nlm.nih.gov/compound/5288783)
- **groups:** approved, investigational

## About

Calcipotriol is only found in individuals that have used or taken this drug. It is a synthetic derivative of calcitriol or Vitamin D.The precise mechanism of calcipotriol in remitting psoriasis is not well-understood. However, it has been shown to have comparable affinity with calcitriol for the Vitamin D receptor, while being less than 1% as active as the calcitriol in regulating calcium metabolism. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** clinical studies with radiolabeled ointment indicate that approximately 6% (+3%, SD) of the applied dose of calcipotriene is absorbed systemically when the ointment is applied topically to psoriasis plaques or 5% (+2.6%, SO) when applied to normal skin.
- **Sources and uses:** For the treatment of moderate plaque psoriasis in adults.
- **Mechanism of toxicity:** The precise mechanism of calcipotriol in remitting psoriasis is not well-understood. However, it has been shown to have comparable affinity with calcitriol for the Vitamin D receptor, while being less than 1% as active as the calcitriol in regulating calcium metabolism. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3062">T3DB T3D3062</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 112965-21-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:50749">ChEBI 50749</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| calcipotriol | parent | 412.614 | C27H40O3 | PubChem | [5288783](https://pubchem.ncbi.nlm.nih.gov/compound/5288783) | Huovinen_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Huovinen_2019_reference](drugs/toxin_calcipotriol/Calcipotriol_Huovinen2019_reference.md) | — | 1-compartment (no model) | 0 | Huovinen J et al., Pharmacokinetics of intra-articular vit…, The Journal of steroid bioc… (2019) | [10.1016/j.jsbmb.2018.12.006](https://doi.org/10.1016/j.jsbmb.2018.12.006) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kissmeyer_1991_reference](drugs/toxin_calcipotriol/Calcipotriol_Kissmeyer1991_reference.md) | — | 1-compartment (no model) | 0 | Kissmeyer AM et al., Calcipotriol (MC 903): pharmacokinetics…, Biochemical pharmacology (1991) | [10.1016/0006-2952(91)90160-7](https://doi.org/10.1016/0006-2952(91)90160-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kokelj_1998_PASI](drugs/toxin_calcipotriol/pd_Kokelj_1998_PASI.md) | PASI score · model not identified | — | Kokelj F et al., Calcipotriol improves the efficacy of c…, Journal of the European Aca… (1998) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=calcipotriol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CYP24A1 (substrate), MPO (inhibitor), VDR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 18:08 | 26:47 | 0/2/0 | 0/1/0 | 0/0/0 | 651,836/33,180 | einfracz / qwen3.8-flash-next | 29 | 2/23 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 142 matched, 124 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kissmeyer_1991.pdf` | Kissmeyer AM et al., Calcipotriol (MC 903): pharmacokinetics…, Biochemical pharmacology (1991) | popPK | 10 | [10.1016/0006-2952(91)90160-7](https://doi.org/10.1016/0006-2952(91)90160-7) | [2043150](https://pubmed.ncbi.nlm.nih.gov/2043150) | The paper reports quantitative pharmacokinetic parameters (clearance rates, AUC ratios) for calcipotriol in rats. |
| `Huovinen_2019.pdf` | Huovinen J et al., Pharmacokinetics of intra-articular vit…, The Journal of steroid bioc… (2019) | popPK | 9 | [10.1016/j.jsbmb.2018.12.006](https://doi.org/10.1016/j.jsbmb.2018.12.006) | [30562554](https://pubmed.ncbi.nlm.nih.gov/30562554) | The paper reports quantitative pharmacokinetic parameters (terminal half-life and absorption percentage) for calcipotriol in sheep. |

<sub>queue written 2026-11-13 17:57 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adachi_2008 | irrelevant | 0 | 0 | The study evaluates therapeutic efficacy and clinical outcomes of topical application timing relative to UV exposure, reporting no quantitative toxicokinetic parameters. |
| popPK | Adam_2022 | irrelevant | 0 | 0 | The paper is a clinical practice review of treatment transition success and patient preferences, containing no toxicokinetic parameters. |
| popPK | Aggarwal_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for tacalcitol and does not report any quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Androus_2026 | irrelevant | 0 | 0 | The paper is a scoping review on clinical efficacy of pretreatments for photodynamic therapy and reports no quantitative toxicokinetic parameters. |
| popPK | Ashcroft_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability review of treatment regimens, reporting only rate ratios and mean differences for clinical outcomes with no toxicokinetic parameters. |
| popPK | Augustin_2007 | irrelevant | 0 | 0 | The paper is a health economics and cost-effectiveness model, containing no toxicokinetic parameters. |
| popPK | Bagel_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy and cost-effectiveness study reporting only clinical outcomes (BSA, PGA, cost), with no toxicokinetic parameters. |
| popPK | Barker_1999 | irrelevant | 0 | 0 | The paper reports clinical efficacy and comparative effectiveness of topical agents for psoriasis but does not report any toxicokinetic parameters for calcipotriol. |
| popPK | Bhatia_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of combination therapy for psoriasis with no toxicokinetic parameters or numeric kinetic data reported. |
| popPK | Bovenschen_2007 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing pulsed dye laser and calcipotriol/betamethasone for psoriasis, reporting only histological and clinical outcomes without any toxicokinetic parameters. |
| popPK | Bruner_2003 | irrelevant | 0 | 0 | The paper is a systematic review of adverse effects (clinical outcomes) with no quantitative toxicokinetic parameters or disposition data. |
| popPK | Castelijns_2000 | irrelevant | 1 | 0 | The paper is a clinical efficacy study focusing on immunohistochemical markers and treatment duration, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for calcipotriol. |
| popPK | Chakraborty_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing two ointments, reporting only clinical scores and treatment outcomes, with no quantitative toxicokinetic parameters. |
| popPK | Chandrashekar_2025 | irrelevant | 0 | 0 | The paper is a clinical review of laser treatments for nail disorders; calcipotriol is mentioned only as a topical agent combined with lasers, with no toxicokinetic parameters reported. |
| PGx | Chen_2018 | not_relevant | 3 | 2 | The study reports a pharmacodynamic/efficacy association (erythema/severity) rather than a specific PK parameter, and explicitly states no association with efficacy of the calcipotriol/acitretin regimen. |
| PGx | Chen_2018_2 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on acitretin, not calcipotriol; calcipotriol is only used as a concomitant background therapy and its PK/PD parameters are not analyzed. |
| popPK | Cunliffe_1992 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study comparing two treatments using PASI scores, with no toxicokinetic parameters reported. |
| popPK | Darley_1996 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study reporting clinical outcomes and serum calcium levels, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, plasma concentration-time curves) for calcipotriol. |
| popPK | Das_2024 | irrelevant | 0 | 0 | The study reports only clinical efficacy (PASI scores) and safety outcomes, with no quantitative toxicokinetic parameters such as absorption, distribution, metabolism, or elimination rates for calcipotriol. |
| popPK | Dattola_2026 | irrelevant | 0 | 0 | The paper reports clinical efficacy and patient-reported outcomes (PASI, DLQI) for a topical calcipotriol formulation but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Dlott_2024 | irrelevant | 2 | 1 | The paper is a review of clinical efficacy and safety for actinic keratosis treatment, reporting only lesion clearance percentages and qualitative adverse effects, with no toxicokinetic parameters for calcipotriol. |
| popPK | Dua_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing calcipotriol to tacalcitol for psoriasis treatment and reports no quantitative toxicokinetic parameters. |
| popPK | Duweb_2000 | irrelevant | 0 | 0 | The study reports clinical efficacy and safety outcomes for topical treatment but contains no quantitative toxicokinetic parameters (e.g., absorption, clearance, half-life). |
| popPK | Duweb_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study for flexural psoriasis treatment with no quantitative toxicokinetic parameters reported. |
| popPK | Duweb_2005 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (sign scores) for calcipotriol in humans but contains no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Duweb_2005_2 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatment outcomes (PASI scores) and does not report any quantitative toxicokinetic parameters. |
| popPK | Duweb_2005_3 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting dermatological scores (PASI) and safety markers (serum calcium), but it reports no pharmacokinetic or toxicokinetic parameters (such as absorption, clearance, half-life, or plasma concentrations) for calcipotriol. |
| popPK | Ferris_2016 | irrelevant | 0 | 0 | The study is a clinical efficacy and tolerability trial reporting only pharmacodynamic outcomes (IGA, BSA, DLQI) with no toxicokinetic parameters for calcipotriene. |
| popPK | Gao_2024 | irrelevant | 0 | 0 | The paper focuses on the drug DGT; calcipotriol is used only as a chemical to induce atopic dermatitis lesions in mice, so no kinetic parameters for calcipotriol are reported. |
| popPK | Ghafoor_2022 | irrelevant | 1 | 0 | The paper is a clinical review of treatment options for scalp psoriasis and reports no quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Green_1994 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study reporting only subjective clinical scores (clearance, sign scores) with no quantitative toxicokinetic parameters such as half-life, clearance, or plasma concentrations. |
| popPK | Guenther_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability comparison of topical treatments for psoriasis, reporting no pharmacokinetic parameters such as half-life, clearance, or plasma concentrations. |
| popPK | Guglielmetti_2012 | irrelevant | 0 | 0 | The paper is a clinical case report on dapsone treatment for psoriasis where calcipotriol is merely mentioned as a concurrent topical maintenance therapy without any kinetic data or parameters. |
| popPK | Haidari_2020 | irrelevant | 0 | 0 | The paper is a cost-effectiveness and efficacy study comparing treatment approaches and reports no toxicokinetic parameters for calcipotriol. |
| popPK | Han_2026 | irrelevant | 0 | 0 | Calcipotriol is used solely as a comparator drug in an efficacy/safety study for oleanolic acid nanoparticles; no toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for calcipotriol are reported. |
| popPK | Heppt_2019 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy for actinic keratosis where calcipotriol is merely one of several topical interventions compared, with no toxicokinetic parameters reported. |
| popPK | Hofmann_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing topical treatments for psoriasis and reports no quantitative toxicokinetic parameters for calcipotriol (or its metabolite). |
| popPK | Hou_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study reporting no quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Jones_1993 | irrelevant | 0 | 0 | The text is a general review/dialogue on vitamin D analogues and does not report quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Kastarinen_2014 | irrelevant | 0 | 0 | This is a Cochrane review on the clinical efficacy of topical treatments for seborrhoeic dermatitis, where calcipotriol is mentioned only as a comparative intervention without any reported toxicokinetic parameters. |
| popPK | Koo_2005 | irrelevant | 0 | 0 | The paper is a clinical review of topical sequential therapy for psoriasis and reports no quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Kragballe_1990 | irrelevant | 1 | 0 | The study reports clinical efficacy and tolerability outcomes for topical calcipotriol but contains no toxicokinetic parameters. |
| popPK | Kravvas_2018 | irrelevant | 0 | 0 | The paper is a systematic review of efficacy and safety outcomes in pediatric psoriasis, reporting no quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Lammers_1996 | irrelevant | 2 | 0 | The paper reports pharmacodynamic effects (urinary calcium/phosphate) but no quantitative toxicokinetic parameters (half-lives, clearance, etc.), and no numeric kinetic values are present in the text. |
| popPK | Laçej_2026 | irrelevant | 1 | 1 | The paper is a narrative review that references other studies' data (e.g., absorption percentages) rather than reporting original quantitative toxicokinetic parameters or models for calcipotriol. |
| popPK | Lebwohl_2021 | irrelevant | 0 | 0 | The paper is a clinical review and summary of the PSO-LONG study focusing on efficacy, relapse rates, and safety in human patients, containing no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for calcipotriol. |
| popPK | Licata_2022 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (PASI scores, clearance rates) and does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for calcipotriol. |
| PGx | Liu_2020 | not_relevant | 5 | 2 | The study reports a statistical association between genotype and clinical efficacy (response rate/PASI) rather than a pharmacogenomic effect on a specific quantitative PK or PD parameter (e.g., AUC, Cmax, or a continuous biomarker). |
| popPK | Liu_2026 | irrelevant | 0 | 0 | Calcipotriol is mentioned only as a failed prior topical treatment; the paper reports no toxicokinetic parameters for the substance. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper focuses on a nanozyme catalyst (FeN4O2-SACs) for psoriasis treatment and uses calcipotriol only as a comparator drug, with no toxicokinetic parameters reported for calcipotriol. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The paper focuses on drug delivery and immunological mechanisms without reporting any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Martella_2023 | irrelevant | 0 | 0 | The paper is a clinical case series and literature review focusing on patient acceptability and efficacy, containing no quantitative toxicokinetic parameters. |
| popPK | Mehta_2016 | irrelevant | 0 | 0 | The paper is a clinical review of UVB phototherapy where calcipotriol is mentioned only as an adjunctive topical treatment, with no kinetic parameters reported. |
| popPK | Mitsuhashi_2005 | irrelevant | 0 | 0 | The paper reports clinical efficacy and apoptosis induction in senile warts but contains no quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Mohney_2022 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety, reporting no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for calcipotriol. |
| popPK | Nathoo_2025 | irrelevant | 0 | 0 | The paper is a clinical case report describing treatment efficacy with no toxicokinetic parameters or quantitative disposition data reported. |
| popPK | Naveh-Many_1993 | irrelevant | 0 | 0 | The paper reports on pharmacodynamic effects (PTH mRNA and serum calcium) and qualitatively mentions pharmacokinetics but provides no quantitative toxicokinetic parameters such as half-lives, clearance, or volumes of distribution. |
| popPK | Paul_2017 | irrelevant | 1 | 0 | The paper is a review of the clinical efficacy and formulation rationale of calcipotriol/betamethasone foam, containing no specific quantitative toxicokinetic parameters or numeric values in the provided text. |
| popPK | Perrussel_2025 | irrelevant | 0 | 0 | The paper is a clinical case series reporting efficacy and patient satisfaction outcomes (PASI, BSA, DLQI) for calcipotriol/betamethasone foam, containing no toxicokinetic parameters. |
| popPK | Pinter_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy case series reporting dermatological outcomes (PGA, mPASI, DLQI) with no toxicokinetic parameters (e.g., absorption, distribution, metabolism, excretion) for calcipotriol. |
| popPK | Ramsay_2000 | irrelevant | 0 | 0 | The paper is an efficacy and safety study of calcipotriol cream combined with UVB phototherapy, reporting clinical outcomes (PASI scores) and UVB exposure metrics, but contains no toxicokinetic parameters such as absorption, distribution, metabolism, or excretion data. |
| popPK | Rim_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatment outcomes and does not report any toxicokinetic parameters for calcipotriol. |
| popPK | Rogalski_2012 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing topical treatments and laser therapy for psoriasis, reporting only clinical response rates (PASI scores) and containing no toxicokinetic parameters. |
| popPK | Schiener_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatments for psoriasis and reports no toxicokinetic parameters (e.g., half-life, clearance, Vd) for calcipotriol. |
| popPK | Scott_2001 | irrelevant | 1 | 0 | This is a clinical review article summarizing efficacy and safety outcomes, providing no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Singh_1996 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| popPK | Snape_2016 | irrelevant | 1 | 0 | The paper reports efficacy outcomes (skin infiltrate thickness) for a clinical trial, not quantitative pharmacokinetic parameters (such as half-life, clearance, or absorption rates) for calcipotriol. |
| popPK | Sonego_2025 | irrelevant | 0 | 0 | The paper reports clinical efficacy endpoints (AKASI scores) for actinic keratosis treatment and contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for calcipotriol. |
| popPK | Speight_1994 | irrelevant | 0 | 0 | The study reports clinical efficacy endpoints (psoriasis clearance, blood flux, UVA dose) with no toxicokinetic parameters (concentrations, half-lives, clearance, etc.) for calcipotriol. |
| popPK | Subedi_2019 | irrelevant | 0 | 0 | The paper is a review about infliximab and biosimilars for psoriasis; calcipotriol is only mentioned as a comparator topical medication with no toxicokinetic parameters reported. |
| PGx | Tan_2018 | not_relevant | 1 | 2 | The paper investigates the effect of calcipotriol on transporter function (MRP1/P-gp/BCRP) and cell cytotoxicity, not how human genetic variants alter calcipotriol's PK or PD parameters. |
| popPK | Taylor_2023 | irrelevant | 0 | 0 | This is a clinical review focusing on efficacy and safety outcomes (PGA, mPASI) without reporting any quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Theng_2004 | irrelevant | 0 | 0 | This is a clinical efficacy trial comparing treatments with no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) reported for calcipotriol. |
| popPK | Thiel_2023 | irrelevant | 0 | 0 | The paper is a narrative review focusing on vitamin D analogues in Alzheimer's disease and does not report original quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Torezan_2018 | irrelevant | 2 | 0 | The paper reports clinical efficacy and safety endpoints (clearance rates, pain scores, side effects) but no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Torezan_2021 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (clearance rates) for a treatment protocol but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) for calcipotriol. |
| popPK | Vakirlis_2005 | irrelevant | 0 | 0 | The paper is a clinical case report describing the therapeutic efficacy and safety of a calcipotriol/betamethasone ointment, containing no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Veverka_2021 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (IGA, mPASI) without reporting any quantitative toxicokinetic parameters for calcipotriol. |
| popPK | Wan_2024 | irrelevant | 0 | 0 | This is a clinical efficacy study (network meta-analysis) comparing treatment outcomes; it contains no toxicokinetic parameters (half-life, clearance, etc.) for calcipotriol. |
| PGx | Wasiewicz_2018 | not_relevant | 0 | 0 | The study investigates antiproliferative activity in melanoma cell lines related to VDR expression levels and isoform splicing, not pharmacogenomic effects of germline variants on PK/PD parameters. |
| popPK | Worley_2023 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for actinic keratosis treatments and reports no quantitative toxicokinetic parameters for calcipotriol. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The study investigates sex-specific pharmacodynamic responses to calcipotriol mediated by testosterone levels and Sod1 knockout status, not pharmacogenomic variation in drug-metabolizing or drug-response genes. |
| popPK | Yap_2018 | irrelevant | 0 | 0 | The paper is a clinical outcome study assessing efficacy and symptoms without reporting any toxicokinetic parameters or pharmacokinetic measurements for calcipotriol. |
| popPK | Yélamos_2021 | irrelevant | 0 | 0 | The paper reports clinical efficacy and microscopic imaging outcomes (TCS, epidermal thickness) but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for calcipotriol. |
| popPK | Zhang_2023 | relevant | 5 | 4 | The paper reports quantitative pharmacokinetic parameters (AUC ratios, plasma concentration ratios) for calcipotriol in mice, but the specific absolute numeric values for clearance, half-life, and volume of distribution are referenced as being shown in Figure 3C and the text provides only relative ratios and qualitative trends rather than the raw parameters needed for a PBPK model. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a clinical case report on palmar mycosis fungoides where calcipotriol is mentioned only as a failed prior treatment, with no toxicokinetic parameters reported. |
| popPK | van_1998 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial for a combination therapy, reporting no quantitative toxicokinetic parameters for calcipotriol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcipotriol%5D&body=Drug%3A%20calcipotriol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_calcipotriol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 17:57 UTC</sub>
