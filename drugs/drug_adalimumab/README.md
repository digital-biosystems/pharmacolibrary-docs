<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;adalimumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adalimumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adalimumab/Adalimumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Adalimumab_Ternant2015_reference&quot;,&quot;label&quot;:&quot;Ternant_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adalimumab/Adalimumab_Ternant2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# adalimumab

- **generic name:** adalimumab
- **ATC codes:** `L04AA17`, `L04AB04`
- **DrugBank:** [DB00051](https://go.drugbank.com/drugs/DB00051) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Adalimumab is a monoclonal antibody that blocks tumour necrosis factor alpha and is used to treat inflammatory conditions such as rheumatoid and other arthritis, psoriasis, ankylosing spondylitis, uveitis, ulcerative colitis, Crohn's disease, and hidradenitis suppurativa. It is widely used and authorised in the European Union, where several products are approved, though some have been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q348260](https://www.wikidata.org/wiki/Q348260) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:25 | 3:24 | 2/4/1 | 1/0/1 | 0/0/0 | 173,808/12,581 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_adalimumab/Adalimumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Ternant_2015_reference](drugs/drug_adalimumab/Adalimumab_Ternant2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [van_2024_reference](drugs/drug_adalimumab/Adalimumab_van2024_reference.md) | — | 1-compartment (no model) | 2 (+2 cov.) | van Huizen A et al., Quantifying the Effect of Methotrexate…, The Journal of investigativ… (2024) | [10.1016/j.jid.2023.10.022](https://doi.org/10.1016/j.jid.2023.10.022) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chan_2020_reference](drugs/drug_adalimumab/Adalimumab_Chan2020_reference.md) | — | 2-compartment (no model) | 3 | Chan P et al., Population Pharmacokinetics, Efficacy E…, Pharmaceutical research (2020) | [10.1007/s11095-019-2752-y](https://doi.org/10.1007/s11095-019-2752-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [García-Otero_2022_reference](drugs/drug_adalimumab/Adalimumab_GarcaOtero2022_reference.md) | — | 1-compartment (no model) | 2 | García-Otero X et al., PET study of intravitreal adalimumab ph…, International journal of ph… (2022) | [10.1016/j.ijpharm.2022.122261](https://doi.org/10.1016/j.ijpharm.2022.122261) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Golhen_2025_reference](drugs/drug_adalimumab/Adalimumab_Golhen2025_reference.md) | — | 1-compartment (no model) | 0 | Golhen K et al., Influence of Disease Type and Activity…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70045](https://doi.org/10.1002/jcph.70045) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Marquez-Megias_2023_reference](drugs/drug_adalimumab/Adalimumab_MarquezMegias2023_reference.md) | — | 1-compartment (no model) | 0 | Marquez-Megias S et al., Population Pharmacokinetic Model of Ada…, Biomedicines (2023) | [10.3390/biomedicines11102822](https://doi.org/10.3390/biomedicines11102822) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Ternant_2015_DAS28](drugs/drug_adalimumab/pd_Ternant_2015_DAS28.md) | disease activity score in 28 joints ← adalimumab · direct Emax (saturable) effect | — | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Ternant_2015_CRP](drugs/drug_adalimumab/pd_Ternant_2015_CRP.md) | C-reactive protein ← adalimumab · indirect response — drug inhibits the production of C-reactive protein | model (no simulator) | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [van_2024_PASI](drugs/drug_adalimumab/pd_van_2024_PASI.md) | PASI ← adalimumab · indirect response — drug inhibits the production of PASI | model (no simulator) | van Huizen A et al., Quantifying the Effect of Methotrexate…, The Journal of investigativ… (2024) | [10.1016/j.jid.2023.10.022](https://doi.org/10.1016/j.jid.2023.10.022) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=adalimumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNF (antibody), TNF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 7  ·  extracted 2  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nader_2017.pdf` | Nader A et al., Population Pharmacokinetics and Immunog…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-016-0502-4](https://doi.org/10.1007/s40262-016-0502-4) | [28066879](https://pubmed.ncbi.nlm.nih.gov/28066879) | The paper describes a population pharmacokinetic model for adalimumab, but specific numeric parameter values (CL, V, etc.) are not provided in the text, likely residing in tables or supplementary material not included here. |
| `Ternant_2015.pdf` | Ternant D et al., Pharmacokinetics and concentration-effe…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12509](https://doi.org/10.1111/bcp.12509) | [25223394](https://pubmed.ncbi.nlm.nih.gov/25223394) | The abstract provides explicit numeric values for apparent clearance (CL/F), apparent volume of distribution (Vd/F), and absorption rate (ka) for adalimumab in a population PK model. |
| `Golhen_2025.pdf` | Golhen K et al., Influence of Disease Type and Activity…, Journal of clinical pharmac… (2025) | popPK | 9 | [10.1002/jcph.70045](https://doi.org/10.1002/jcph.70045) | [40410850](https://pubmed.ncbi.nlm.nih.gov/40410850) | The paper describes a pharmacokinetic model for adalimumab in children and reports inter-individual variability percentages and relative changes in CL/F, but specific absolute numeric parameter estimates (e.g., mean CL values in L/h or L/kg) are not explicitly listed in the provided text. |
| `García-Otero_2022.pdf` | García-Otero X et al., PET study of intravitreal adalimumab ph…, International journal of ph… (2022) | popPK | 8 | [10.1016/j.ijpharm.2022.122261](https://doi.org/10.1016/j.ijpharm.2022.122261) | [36208838](https://pubmed.ncbi.nlm.nih.gov/36208838) | The study reports quantitative PK parameters (intraocular elimination half-life) for adalimumab in rats using a one-compartment model, though clearance and volume values are not explicitly listed in the provided text. |
| `Kimura_2018.pdf` | Kimura K et al., Pharmacokinetic and pharmacodynamic mod…, Biopharmaceutics & drug dis… (2018) | popPK | 6 | [10.1002/bdd.2134](https://doi.org/10.1002/bdd.2134) | [29790586](https://pubmed.ncbi.nlm.nih.gov/29790586) | The paper describes a PK/PD model for adalimumab in humans, but the provided evidence text contains no specific numeric parameter values (such as CL, V, or ka). |

<sub>queue written 2026-10-15T00:22:19.996875+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fenebrutinib, with adalimumab serving only as an active comparator in the clinical trial arms. |
| popPK | Chen_2024 | irrelevant | 4 | 0 | The paper uses an existing PK model for exposure-response analysis but does not report new quantitative PK parameters (CL, V, etc.) for adalimumab in the provided text. |
| popPK | Ding_2024 | relevant | 8 | 1 | The study performs a population PK analysis of adalimumab and mentions a range for IIV of clearance (53.5%), but the specific numeric parameter estimates (CL/F, V/F, KA) and covariate coefficients are not present in the provided text or figures. |
| popPK | Eylenbosch_2026 | irrelevant | 1 | 0 | This is a narrative review discussing biologic dosing strategies without reporting any specific quantitative PK parameter values for adalimumab. |
| popPK | Khatri_2019 | irrelevant | 0 | 0 | The study focuses on ABT-122 with adalimumab as a comparator, and no quantitative pharmacokinetic parameters (CL, V, etc.) for adalimumab are reported in the evidence. |
| popPK | Kimura_2018 | relevant | 6 | 0 | The paper describes a PK/PD model for adalimumab in humans, but the provided evidence text contains no specific numeric parameter values (such as CL, V, or ka). |
| popPK | Kinzer_2023 | irrelevant | 0 | 0 | The paper focuses on physicochemical characterization (glycans) and functional assays (binding/effector) in vitro, with no pharmacokinetic data reported. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The study focuses on the structural design and in vitro binding affinity of a new antibody (Humivet-R1), using adalimumab as a template, and does not report any pharmacokinetic parameters. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of clinical efficacy (DAS28 scores) for rheumatoid arthritis, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for adalimumab. |
| popPK | Nader_2017 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for adalimumab, but specific numeric parameter values (CL, V, etc.) are not provided in the text, likely residing in tables or supplementary material not included here. |
| popPK | Roblin_2024 | irrelevant | 1 | 0 | This is a review article on therapeutic drug monitoring strategies that does not report original quantitative pharmacokinetic parameter values for adalimumab. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 4 | 1 | This is a review article; while it mentions adalimumab population PK models, the specific numeric parameter values (CL, V) are not provided in the text, only general descriptors and values for other drugs (golimumab, etc.). |
| popPK | Steenholdt_2025 | irrelevant | 1 | 0 | This is a retrospective clinical cohort study on treatment sequencing outcomes, not a PK parameter study; it mentions trough concentration thresholds for adalimumab but reports no clearance, volume, or other disposition parameters. |
| popPK | Stodtmann_2024 | irrelevant | 2 | 0 | The study is an exposure-response analysis that simulates exposures using an "established" PK model rather than estimating new PK parameters, and no specific quantitative PK values (CL, V, etc.) are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:22 UTC</sub>
