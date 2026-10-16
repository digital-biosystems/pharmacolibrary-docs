<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium sulfate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MagnesiumSulfate_Du2019_reference&quot;,&quot;label&quot;:&quot;Du_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_Du2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MagnesiumSulfate_da2020_reference&quot;,&quot;label&quot;:&quot;da_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_da2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MagnesiumSulfate_Rui1996_reference&quot;,&quot;label&quot;:&quot;Rui_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_Rui1996_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lu_2002_DBP&quot;,&quot;label&quot;:&quot;Lu_2002 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/pd_Lu_2002_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lu_2002_SBP&quot;,&quot;label&quot;:&quot;Lu_2002 \u00b7 SBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/pd_Lu_2002_SBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# magnesium sulfate

- **generic name:** magnesium sulfate
- **ATC codes:** `A06AD04`, `A12CC02`, `B05XA05`, `D11AX05`, `V04CC02`
- **DrugBank:** [DB00653](https://go.drugbank.com/drugs/DB00653) · **PubChem:** [CID 24083](https://pubchem.ncbi.nlm.nih.gov/compound/24083)
- **molar mass:** 120.368 g/mol (MgO4S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Magnesium sulfate is used as a laxative for constipation, as a magnesium supplement, and in electrolyte solutions; it also acts as an anticonvulsant, antiarrhythmic, analgesic, anesthetic, and tocolytic agent. It is widely used in human medicine and is also an approved veterinary drug, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q288266](https://www.wikidata.org/wiki/Q288266) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| magnesium | metabolite | 24.305 | Mg | PubChem | [5462224](https://pubchem.ncbi.nlm.nih.gov/compound/5462224) | Brookfield_2021, Deng_2024, Du_2019 |
| magnesium_sulfate | metabolite | 120.368 | MgO4S | DrugBank | [24083](https://pubchem.ncbi.nlm.nih.gov/compound/24083) | Brookfield_2016, Brookfield_2021, Chuan_2001, Deng_2024, Du_2019, Rui_1996, da_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:51 | 5:21 | 2/4/4 | 0/0/1 | 0/0/0 | 235,849/53,552 | einfracz / qwen3.8-27b | 8 | 1/7 | 7/1 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Du_2019_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Du2019_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+3 cov.) | Du L et al., Population Pharmacokinetic Modeling to…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1328](https://doi.org/10.1002/jcph.1328) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span> | [da_2020_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_da2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | da Costa TX et al., Population Pharmacokinetics of Magnesiu…, Drugs in R&D (2020) | [10.1007/s40268-020-00315-2](https://doi.org/10.1007/s40268-020-00315-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Brookfield_2016_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Brookfield2016_reference.md) | — | 1-compartment (no model) | 2 | Brookfield KF et al., Pharmacokinetics and placental transfer…, American journal of obstetr… (2016) | [10.1016/j.ajog.2015.12.060](https://doi.org/10.1016/j.ajog.2015.12.060) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8), gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag, k12 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Brookfield_2021_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Brookfield2021_reference.md) | held back | 2-compartment, oral | 6 (+3 cov.) | Brookfield K et al., Magnesium sulfate pharmacokinetics afte…, AJOG global reports (2021) | [10.1016/j.xagr.2021.100018](https://doi.org/10.1016/j.xagr.2021.100018) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Deng_2024_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Deng2024_reference.md) | held back | 1-compartment, IV | 2 | Deng J et al., Population pharmacokinetics and dose op…, BMC pregnancy and childbirth (2024) | [10.1186/s12884-024-06620-x](https://doi.org/10.1186/s12884-024-06620-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.25). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Rui_1996_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Rui1996_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Rui JZ et al., [Population pharmacokinetics/pharmacody…, Yao xue xue bao = Acta phar… (1996) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Chuan_2001_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Chuan2001_reference.md) | — | 1-compartment (no model) | 4 | Chuan FS et al., Population pharmacokinetics of magnesiu…, American journal of obstetr… (2001) | [10.1067/mob.2001.116726](https://doi.org/10.1067/mob.2001.116726) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Du_2019_2_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Du2019v2_reference.md) | — | 1-compartment (no model) | 0 | Du L et al., Alternative Magnesium Sulfate Dosing Re…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1448](https://doi.org/10.1002/jcph.1448) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lu_2002_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Lu2002_reference.md) | — | 1-compartment (no model) | 0 | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rower_2017_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Rower2017_reference.md) | — | 1-compartment (no model) | 0 | Rower JE et al., Clinical pharmacokinetics of magnesium…, European journal of clinica… (2017) | [10.1007/s00228-016-2165-3](https://doi.org/10.1007/s00228-016-2165-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lu_2002_DBP](drugs/drug_magnesium_sulfate/pd_Lu_2002_DBP.md) | diastolic blood pressure ← magnesium · delayed effect through an effect compartment | ▶ model + simulator | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lu_2002_SBP](drugs/drug_magnesium_sulfate/pd_Lu_2002_SBP.md) | systolic blood pressure ← magnesium · delayed effect through an effect compartment | ▶ model + simulator | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=magnesium_sulfate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 20 returned
- **screened:** 10  ·  **relevant:** 10
- **records:** 10  ·  extracted 2  ·  needs_review 4  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brookfield_2016.pdf` | Brookfield KF et al., Pharmacokinetics and placental transfer…, American journal of obstetr… (2016) | popPK | 10 | [10.1016/j.ajog.2015.12.060](https://doi.org/10.1016/j.ajog.2015.12.060) | [26767791](https://pubmed.ncbi.nlm.nih.gov/26767791) | The abstract reports specific quantitative clearance values (3.98 L/h and 5.88 L/h) and steady-state concentrations for magnesium sulfate in pregnant women. |
| `Chuan_2001.pdf` | Chuan FS et al., Population pharmacokinetics of magnesiu…, American journal of obstetr… (2001) | popPK | 10 | [10.1067/mob.2001.116726](https://doi.org/10.1067/mob.2001.116726) | [11568783](https://pubmed.ncbi.nlm.nih.gov/11568783) | The paper reports specific quantitative population pharmacokinetic parameters (clearance, volume of distribution, half-life) for magnesium sulfate in humans. |
| `Lu_2002.pdf` | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) | [12403646](https://pubmed.ncbi.nlm.nih.gov/12403646) | The paper reports a population pharmacokinetic model for magnesium sulfate in preeclamptic women with explicit numeric values for CL, Vc, Vp, and Q. |
| `Rower_2017.pdf` | Rower JE et al., Clinical pharmacokinetics of magnesium…, European journal of clinica… (2017) | popPK | 10 | [10.1007/s00228-016-2165-3](https://doi.org/10.1007/s00228-016-2165-3) | [27909740](https://pubmed.ncbi.nlm.nih.gov/27909740) | The paper describes a population PK study of magnesium sulfate in children with specific parameters (half-life, baseline concentration) reported in the abstract, though detailed model outputs (CL, V) are likely in the full text or figures not fully provided. |
| `Rui_1996.pdf` | Rui JZ et al., [Population pharmacokinetics/pharmacody…, Yao xue xue bao = Acta phar… (1996) | popPK | 10 | not captured | [8762465](https://pubmed.ncbi.nlm.nih.gov/8762465) | The paper reports specific numeric population pharmacokinetic parameters (clearance, volume, intercompartmental clearance) for magnesium sulfate derived from a 2-compartment model. |
| `Chen_1991.pdf` | Chen G et al., [Pharmacokinetic-pharmacodynamic model…, Zhongguo yao li xue bao = A… (1991) | popPK | 8 | not captured | [1781283](https://pubmed.ncbi.nlm.nih.gov/1781283) | The study reports magnesium sulfate pharmacokinetic data and fits a biexponential model, providing some PK/PD parameters (Kco, Emax, EC50) in the text, though specific CL/V values are not explicitly listed. |

<sub>queue written 2026-10-15T00:46:34.535384+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1991 | relevant | 8 | 4 | The study reports magnesium sulfate pharmacokinetic data and fits a biexponential model, providing some PK/PD parameters (Kco, Emax, EC50) in the text, though specific CL/V values are not explicitly listed. |
| popPK | Cho_2018 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on neuromuscular blockade, not a pharmacokinetic study of magnesium sulfate, and reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Landau_2004 | irrelevant | 1 | 0 | The study is a pharmacodynamic vascular reactivity study (dose-response) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Lu_2000 | relevant | 4 | 5 | The paper is a review that provides general quantitative PK parameters (Vd range, 2-compartment model description) for magnesium sulfate, but lacks specific subject study data like clearance values. |
| popPK | Mohammed_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasoactive effects on chicken embryonic ductus arteriosus, not a pharmacokinetic study of magnesium sulfate disposition. |
| popPK | Polat_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic experiment measuring vasorelaxant effects on isolated umbilical arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rower_2025 | relevant | 8 | 3 | The study externally validates a population PK model for IV magnesium sulfate and reports validation metrics (bias/accuracy) and exposure metrics (AUC), but the specific parameter estimates (CL, V, Q, ka) are located in the cited Table S3 or previous publications, not in the provided text. |
| popPK | Skajaa_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of magnesium's effect on isolated uteroplacental vessels, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Torregrosa_1994 | irrelevant | 0 | 0 | This is a mechanistic pharmacodynamics study focusing on vasoconstriction/vasodilation, not a pharmacokinetic study reporting disposition parameters for magnesium sulfate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:46 UTC</sub>
