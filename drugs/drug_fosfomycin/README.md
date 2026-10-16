<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;fosfomycin&quot;}]"></div>

# fosfomycin

- **generic name:** fosfomycin
- **ATC codes:** `J01XX01`, `S02AA17`
- **DrugBank:** [DB00828](https://go.drugbank.com/drugs/DB00828) · **PubChem:** [CID 446987](https://pubchem.ncbi.nlm.nih.gov/compound/446987)
- **molar mass:** 138.059 g/mol (C3H7O4P) — DrugBank
- **groups:** approved, investigational

## About

Fosfomycin is an antibiotic used to treat urinary tract infections, including cystitis caused by Escherichia coli. It is an approved antibacterial, given systemically and also as an ear (otological) antiinfective, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q183554](https://www.wikidata.org/wiki/Q183554) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosfomycin | parent | 138.059 | C3H7O4P | DrugBank | [446987](https://pubchem.ncbi.nlm.nih.gov/compound/446987) | Cattrall_2019, Edwina_2023, Götz_2025, Hüppe_2023, Isla_2024, Kane_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:39 | 40:22 | 1/3/4 | 2/0/0 | 0/0/0 | 629,003/182,277 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Edwina_2023_reference](drugs/drug_fosfomycin/Fosfomycin_Edwina2023_reference.md) | — | 2-compartment (no model) | 4 | Edwina AE et al., Population plasma and urine pharmacokin…, European journal of clinica… (2023) | [10.1007/s00228-023-03477-5](https://doi.org/10.1007/s00228-023-03477-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Götz_2025_reference](drugs/drug_fosfomycin/Fosfomycin_Gtz2025_reference.md) | — | 1-compartment (no model) | 3 | Götz KM et al., Population pharmacokinetics of intraven…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01779-24](https://doi.org/10.1128/aac.01779-24) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Hüppe_2023_reference](drugs/drug_fosfomycin/Fosfomycin_Hppe2023_reference.md) | — | 1-compartment (no model) | 4 | Hüppe T et al., Population pharmacokinetic modeling of…, Scientific reports (2023) | [10.1038/s41598-023-45084-5](https://doi.org/10.1038/s41598-023-45084-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Isla_2024_reference](drugs/drug_fosfomycin/Fosfomycin_Isla2024_reference.md) | — | 1-compartment (no model) | 7 | Isla A et al., Population pharmacokinetics of oral fos…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae295](https://doi.org/10.1093/jac/dkae295) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q349 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kane_2021_reference](drugs/drug_fosfomycin/Fosfomycin_Kane2021_reference.md) | — | 1-compartment (no model) | 7 | Kane Z et al., IV and oral fosfomycin pharmacokinetics…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkab083](https://doi.org/10.1093/jac/dkab083) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bekker_2026_reference](drugs/drug_fosfomycin/Fosfomycin_Bekker2026_reference.md) | — | 1-compartment (no model) | 0 | Bekker A et al., Pharmacokinetics and safety of fosfomyc…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01126-25](https://doi.org/10.1128/aac.01126-25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cattrall_2019_reference](drugs/drug_fosfomycin/Fosfomycin_Cattrall2019_reference.md) | — | 1-compartment (no model) | 0 (+1 cov.) | Cattrall JWS et al., A pharmacokinetic-pharmacodynamic asses…, European journal of clinica… (2019) | [10.1007/s10096-019-03679-9](https://doi.org/10.1007/s10096-019-03679-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Parker_2015_reference](drugs/drug_fosfomycin/Fosfomycin_Parker2015_reference.md) | — | 1-compartment (no model) | 0 | Parker SL et al., Population Pharmacokinetics of Fosfomyc…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.01321-15](https://doi.org/10.1128/AAC.01321-15) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fransen_2017_bacterial_count](drugs/drug_fosfomycin/pd_Fransen_2017_bacterial_count.md) | bacterial count ← fosfomycin · direct sigmoid Emax (Hill) effect | — | Fransen F et al., Pharmacodynamics of fosfomycin against…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx328](https://doi.org/10.1093/jac/dkx328) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Wangchinda_2024_PTA](drugs/drug_fosfomycin/pd_Wangchinda_2024_PTA.md) | Pharmacokinetic/pharmacodynamic target attainment (PTA) ← fosfomycin · model not identified | — | Wangchinda W et al., Population pharmacokinetic/pharmacodyna…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae111](https://doi.org/10.1093/jac/dkae111) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fosfomycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 20 returned
- **screened:** 11  ·  **relevant:** 9
- **records:** 8  ·  extracted 1  ·  needs_review 4  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Parker_2015.pdf` | Parker SL et al., Population Pharmacokinetics of Fosfomyc…, Antimicrobial agents and ch… (2015) | popPK | 10 | [10.1128/AAC.01321-15](https://doi.org/10.1128/AAC.01321-15) | [26239990](https://pubmed.ncbi.nlm.nih.gov/26239990) | The paper is a population PK study of fosfomycin in humans, and all key numeric parameter estimates (CL, Vc, Q, Vp) are explicitly provided in the text. |
| `Wangchinda_2024.pdf` | Wangchinda W et al., Population pharmacokinetic/pharmacodyna…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae111](https://doi.org/10.1093/jac/dkae111) | [38597137](https://pubmed.ncbi.nlm.nih.gov/38597137) | The paper describes a population PK study for fosfomycin in humans, but the abstract only mentions significant covariates (CLCR, gender) and dosing recommendations without listing the specific numeric PK parameter estimates (CL, V, etc.). |
| `Chavan_2023.pdf` | Chavan R et al., Investigations on, Microbial drug resistance (… (2023) | popPK | 7 | [10.1089/mdr.2022.0119](https://doi.org/10.1089/mdr.2022.0119) | [36346323](https://pubmed.ncbi.nlm.nih.gov/36346323) | The study reports PK/PD targets (AUC/MIC) and plasma protein binding but does not provide specific compartmental PK parameters (CL, V, t1/2) in the text provided. |

<sub>queue written 2026-10-13T11:16:36.126453+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butranova_2023 | irrelevant | 1 | 0 | The paper is a review of neonatal antibiotic pharmacokinetics that mentions fosfomycin only as a "Reserve" class antibiotic and lists its general PK/PD target (AUC0-24/MIC), but provides no specific quantitative disposition parameters (CL, V, T1/2) for the drug itself. |
| popPK | Chavan_2023 | relevant | 7 | 2 | The study reports PK/PD targets (AUC/MIC) and plasma protein binding but does not provide specific compartmental PK parameters (CL, V, t1/2) in the text provided. |
| popPK | Farooq_2025 | irrelevant | 1 | 0 | The study is an in vitro PK/PD interaction model for antibiotic combinations, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for fosfomycin. |
| popPK | Farooq_2026 | irrelevant | 2 | 0 | This is an in vitro pharmacodynamic (PD) study that simulates PK using published models, but it does not report new quantitative PK parameters (CL, V, etc.) for fosfomycin derived from subject data. |
| popPK | Fransen_2017 | irrelevant | 0 | 0 | The study describes in vitro pharmacodynamics (time-kill assays and resistance emergence) of bacteria, not pharmacokinetic parameters (CL, V, t1/2) of fosfomycin in a host. |
| popPK | Kroemer_2023 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study of antibiotic combinations, not a pharmacokinetic study of fosfomycin disposition. |
| popPK | Kroemer_2024 | irrelevant | 1 | 0 | The study is an in vitro PK/PD analysis in a hollow fiber model focusing on drug interactions and bacterial killing, not a quantitative PK study of fosfomycin in a biological host, and no intrinsic PK parameters (CL, V, Q, ka) are reported. |
| popPK | Martins_2021 | irrelevant | 4 | 0 | The paper is a PBPK/PD modeling study that builds upon previously published PK data for fosfomycin but does not report new quantitative disposition parameters or specific numeric PK values for fosfomycin in the provided evidence. |
| popPK | Mohd_2023 | irrelevant | 2 | 0 | The study is an in-vitro PK/PD simulation that models drug concentrations to estimate efficacy but does not report measured pharmacokinetic parameters (CL, V, ka) for the drug in a biological system. |
| popPK | Wangchinda_2024 | relevant | 10 | 3 | The paper describes a population PK study for fosfomycin in humans, but the abstract only mentions significant covariates (CLCR, gender) and dosing recommendations without listing the specific numeric PK parameter estimates (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 11:16 UTC</sub>
