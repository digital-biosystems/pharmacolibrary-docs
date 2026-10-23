<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valaciclovir&quot;}]"></div>

# valaciclovir

- **generic name:** valaciclovir
- **ATC codes:** `J05AB11`
- **DrugBank:** [DB00577](https://go.drugbank.com/drugs/DB00577) · **PubChem:** [CID 60773](https://pubchem.ncbi.nlm.nih.gov/compound/60773)
- **molar mass:** 324.3357 g/mol (C13H20N6O4) — DrugBank
- **groups:** approved, investigational

## About

Valaciclovir is an antiviral medicine used to treat infections caused by herpes viruses, including shingles, eye shingles, cold sores and genital herpes. It is an approved antiviral for systemic use and is widely used in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418594](https://www.wikidata.org/wiki/Q418594) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valaciclovir | parent | 324.336 | C13H20N6O4 | DrugBank | [60773](https://pubchem.ncbi.nlm.nih.gov/compound/60773) | Kably_2025, Zeng_2009 |
| 9-carboxymethoxymethylguanine | metabolite | 239.191 | C8H9N5O4 | PubChem | [135508007](https://pubchem.ncbi.nlm.nih.gov/compound/135508007) | Kably_2025 |
| aciclovir (acyclovir) | metabolite | 225.208 | C8H11N5O3 | PubChem | [135398513](https://pubchem.ncbi.nlm.nih.gov/compound/135398513) | Kably_2025, Zeng_2009 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Zeng_2009_reference](drugs/drug_valaciclovir/Valaciclovir_Zeng2009_reference.md) | — | 1-compartment (no model) | 1 | Zeng L et al., Population pharmacokinetics of acyclovi…, Antimicrobial agents and ch… (2009) | [10.1128/AAC.01138-08](https://doi.org/10.1128/AAC.01138-08) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Kably_2025_reference](drugs/drug_valaciclovir/Valaciclovir_Kably2025_reference.md) | — | parent + metabolite (no model) | 3 | Kably B et al., Population pharmacokinetics of aciclovi…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf070](https://doi.org/10.1093/jac/dkaf070) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hamilton_2020_HCMV_replication_in_HCMV_infected_first_trimester_TEV_1_trophoblasts_at_7_days_postinfection](drugs/drug_valaciclovir/pd_Hamilton_2020_HCMV_replication_in_HCMV_infected_first_trimes.md) | HCMV replication in HCMV-infected first-trimester TEV-1 trophoblasts at 7 days postinfection ← aciclovir (active metabolite of valaciclovir) · direct Emax (saturable) effect | — | Hamilton ST et al., Investigational Antiviral Therapy Model…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01627-20](https://doi.org/10.1128/AAC.01627-20) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=valaciclovir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | ileum | `SLC10A2` substrate | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC15A2` inhibitor/substrate, `SLC22A6` unknown, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GUK1 (substrate), SLC6A14 (unknown), TK (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:38 | 1:06 | 1/1/0 | 1/0/0 | 0/0/0 | 47,527/4,389 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faure-Bardon_2025.pdf` | Faure-Bardon V et al., Quantification of maternal and fetal va…, The Journal of antimicrobia… (2025) | popPK | 9 | [10.1093/jac/dkae470](https://doi.org/10.1093/jac/dkae470) | [39810739](https://pubmed.ncbi.nlm.nih.gov/39810739) | Population PK of aciclovir (valaciclovir's active form) in pregnant women, but the evidence only states parameters were "defined" without numeric values, which likely reside in tables/figures not provided. |
| `Kably_2025.pdf` | Kably B et al., Population pharmacokinetics of aciclovi…, The Journal of antimicrobia… (2025) | popPK | 9 | [10.1093/jac/dkaf070](https://doi.org/10.1093/jac/dkaf070) | [40155064](https://pubmed.ncbi.nlm.nih.gov/40155064) | Population PK model of aciclovir (valaciclovir's active moiety) and its metabolite 9-CMMG in valaciclovir-dosed patients; some AUC values given but full CL/V parameter estimates likely in tables/supplement not fully shown. |
| `Simon_2002.pdf` | Simon MW et al., Pharmacokinetics and safety of valacicl…, Drugs in R&D (2002) | popPK | 8 | [10.2165/00126839-200203060-00001](https://doi.org/10.2165/00126839-200203060-00001) | [12516939](https://pubmed.ncbi.nlm.nih.gov/12516939) | Non-compartmental PK of aciclovir after valaciclovir dosing in children with full numeric parameters (CL/F, Vd/F, t½, AUC) reported directly in the abstract, though not a population-PK model. |

<sub>queue written 2026-10-07 16:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chono_2010 | irrelevant | 0 | 0 | This is an antiviral efficacy study of ASP2151 (amenamevir) with no PK parameters for valaciclovir, which appears only as a comparator. |
| popPK | Das_2023 | irrelevant | 0 | 0 | This is an antiviral efficacy/spectroscopy study of new amide compounds; valaciclovir is only mentioned as a standard drug with no PK parameters reported. |
| popPK | Faure-Bardon_2025 | relevant | 9 | 3 | Population PK of aciclovir (valaciclovir's active form) in pregnant women, but the evidence only states parameters were "defined" without numeric values, which likely reside in tables/figures not provided. |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | In vitro/ex vivo antiviral efficacy study of other drugs; no valaciclovir PK parameters reported. |
| popPK | Neves_2010 | irrelevant | 3 | 2 | Bioequivalence study reporting only Cmax/AUC confidence intervals, no clearance, volume, half-life, or compartmental/population-PK parameters for valaciclovir. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | In vitro binding/antiviral study with no pharmacokinetic parameters for valaciclovir. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | In-vitro antiviral mechanism study; valaciclovir/ACV is only a comparator with no PK disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalaciclovir%5D&body=Drug%3A%20valaciclovir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valaciclovir/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 16:38 UTC</sub>
