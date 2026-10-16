<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;phenoxymethylpenicillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenoxymethylpenicillin_Obura2025_reference&quot;,&quot;label&quot;:&quot;Obura_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Obura2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# phenoxymethylpenicillin

- **generic name:** phenoxymethylpenicillin
- **ATC codes:** `J01CE02`, `J01CE10`
- **DrugBank:** [DB00417](https://go.drugbank.com/drugs/DB00417) · **PubChem:** [CID 6869](https://pubchem.ncbi.nlm.nih.gov/compound/6869)
- **molar mass:** 350.39 g/mol (C16H18N2O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Phenoxymethylpenicillin (penicillin V) is an antibiotic used to treat bacterial infections such as tonsillitis and staphylococcal or pneumococcal infections. It is an approved medicine, listed among WHO essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422215](https://www.wikidata.org/wiki/Q422215) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenoxymethylpenicillin | parent | 350.39 | C16H18N2O5S | DrugBank | [6869](https://pubchem.ncbi.nlm.nih.gov/compound/6869) | Rawson_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:14 | 1:34 | 1/0/2 | 2/0/0 | 0/0/0 | 108,713/7,621 | einfracz / qwen3.8-27b | 5 | 0/2 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span> | [Obura_2025_reference](drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Obura2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Obura B et al., Pharmacokinetics of Intrapartum Benzylp…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70072](https://doi.org/10.1002/psp4.70072) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rawson_2021_mean](drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Rawson2021_mean.md) | — | 1-compartment (no model) | 6 | Rawson TM et al., Exploring the Pharmacokinetics of Pheno…, Open forum infectious disea… (2021) | [10.1093/ofid/ofab573](https://doi.org/10.1093/ofid/ofab573) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rawson_2021_median](drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Rawson2021_median.md) | — | 1-compartment (no model) | 6 | Rawson TM et al., Exploring the Pharmacokinetics of Pheno…, Open forum infectious disea… (2021) | [10.1093/ofid/ofab573](https://doi.org/10.1093/ofid/ofab573) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Darkes_2002_clinical_cure_rate](drugs/drug_phenoxymethylpenicillin/pd_Darkes_2002_clinical_cure_rate.md) | clinical cure rate ← phenoxymethylpenicillin · model not identified | — | Darkes MJ et al., Cefditoren pivoxil, Drugs (2002) | [10.2165/00003495-200262020-00006](https://doi.org/10.2165/00003495-200262020-00006) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ellison_2009_clinical_outcome_success_failure](drugs/drug_phenoxymethylpenicillin/pd_Ellison_2009_clinical_outcome_success_failure.md) | clinical outcome (success/failure) ← phenoxymethylpenicillin · model not identified | — | Ellison SJ, The role of phenoxymethylpenicillin, am…, British dental journal (2009) | [10.1038/sj.bdj.2009.257](https://doi.org/10.1038/sj.bdj.2009.257) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenoxymethylpenicillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` transporter | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rawson_2019.pdf` | Rawson TM et al., Microneedle biosensors for real-time, m…, The Lancet. Digital health (2019) | popPK | 5 | [10.1016/S2589-7500(19)30131-1](https://doi.org/10.1016/S2589-7500(19)30131-1) | [33323208](https://pubmed.ncbi.nlm.nih.gov/33323208) | The study reports non-compartmental PK parameters (AUC, Cmax, Tmax) for phenoxymethylpenicillin in humans, but does not provide the specific disposition parameters (CL, V, ka) typically targeted for population modeling. |

<sub>queue written 2026-10-07T10:12:53.783509+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cappelletty_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model comparing bactericidal activities, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for phenoxymethylpenicillin. |
| popPK | Obura_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for benzylpenicillin (penicillin G), not phenoxymethylpenicillin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:12 UTC</sub>
