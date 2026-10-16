<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vincristine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vincristine_Centanni2024_reference&quot;,&quot;label&quot;:&quot;Centanni_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/Vincristine_Centanni2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vincristine

- **generic name:** vincristine
- **ATC codes:** `L01CA02`
- **DrugBank:** [DB00541](https://go.drugbank.com/drugs/DB00541) · **PubChem:** [CID 5978](https://pubchem.ncbi.nlm.nih.gov/compound/5978)
- **molar mass:** 824.972 g/mol (C46H56N4O10) — DrugBank
- **groups:** approved, investigational

## About

Vincristine is a Vinca alkaloid chemotherapy used to treat several cancers, including leukemia, lymphoma, neuroblastoma, and sarcomas such as Ewing sarcoma and rhabdomyosarcoma. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408977](https://www.wikidata.org/wiki/Q408977) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vincristine | parent | 824.972 | C46H56N4O10 | DrugBank | [5978](https://pubchem.ncbi.nlm.nih.gov/compound/5978) | Centanni_2024, Owellen_1977, van_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:09 | 13:59 | 1/2/2 | 2/1/1 | 1/0/11 | 218,530/49,922 | openai / gpt-6-luna | 12 | 3/10 | 9/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.933). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Centanni_2024_reference](drugs/drug_vincristine/Vincristine_Centanni2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Centanni M et al., Model-Informed Precision Dosing to Redu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-023-01336-1](https://doi.org/10.1007/s40262-023-01336-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Owellen_1977_reference](drugs/drug_vincristine/Vincristine_Owellen1977_reference.md) | — | 2-compartment (no model) | 6 | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [van_2022_reference](drugs/drug_vincristine/Vincristine_van2022_reference.md) | — | 1-compartment (no model) | 3 | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Igarashi_2021_mean](drugs/drug_vincristine/Vincristine_Igarashi2021_mean.md) | — | 1-compartment (no model) | 1 | Igarashi T et al., Population pharmacokinetic model develo…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04220-y](https://doi.org/10.1007/s00280-020-04220-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Igarashi_2021_standard_error_of_the_mean](drugs/drug_vincristine/Vincristine_Igarashi2021_standard_error_of_the_mean.md) | — | 1-compartment (no model) | 0 | Igarashi T et al., Population pharmacokinetic model develo…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04220-y](https://doi.org/10.1007/s00280-020-04220-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rosson_2002_DNA_synthesis](drugs/drug_vincristine/pd_Rosson_2002_DNA_synthesis.md) | DNA synthesis ← vincristine · inhibition effect | — | Rosson GB et al., Drug resistance in malignant rhabdoid t…, Cancer chemotherapy and pha… (2002) | [10.1007/s00280-001-0398-y](https://doi.org/10.1007/s00280-001-0398-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Yuan_2025_VIPN](drugs/drug_vincristine/pd_Yuan_2025_VIPN.md) | vincristine-induced peripheral neuropathy ← vincristine · stimulation effect | — | Yuan Y et al., Pharmacokinetic, Pharmacodynamic and Ph…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3462](https://doi.org/10.1002/cpt.3462) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span> | [Centanni_2024_VIPN](drugs/drug_vincristine/pd_Centanni_2024_VIPN.md) | vincristine-induced peripheral neuropathy ← vincristine · categorical (graded) response model | — | Centanni M et al., Model-Informed Precision Dosing to Redu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-023-01336-1](https://doi.org/10.1007/s40262-023-01336-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Olszewska-Słonina_2004_apoptosis](drugs/drug_vincristine/pd_Olszewska_S_onina_2004_apoptosis.md) | apoptosis ← vincristin · stimulation effect | — | Olszewska-Słonina D et al., B16 and CLS91 mouse melanoma cells susc…, Acta poloniae pharmaceutica (2004) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **MTNR1B** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [van_2022](drugs/drug_vincristine/pgx_van_2022_MTNR1B_safety.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **CEP72** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Christofyllakis_2024](drugs/drug_vincristine/pgx_Christofyllakis_2024_CEP72_Q100.md) | Christofyllakis K et al., An inherited genetic variant of the CEP…, Annals of hematology (2024) | [10.1007/s00277-024-05973-9](https://doi.org/10.1007/s00277-024-05973-9) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | **SARM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeung_2025](drugs/drug_vincristine/pgx_Yeung_2025_SARM1_Q100.md) | Yeung J et al., Vincristine-induced brain toxicity is r…, Acta neuropathologica commu… (2025) | [10.1186/s40478-025-02171-0](https://doi.org/10.1186/s40478-025-02171-0) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **CEP72** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_CEP72_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **ETAA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_ETAA1_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **FGD4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_FGD4_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **FIG4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_FIG4_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **GARS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_GARS_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **NDRG1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_NDRG1_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **RAB7A** | `Q21` · AUC ratio | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_RAB7A_Q21.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | **SEPTIN9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_SEPTIN9_Q100.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **SNU13** | `Q21` · AUC ratio | unknown | [van_2022](drugs/drug_vincristine/pgx_van_2022_SNU13_Q21.md) | van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022) | [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vincristine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), CEP72 (unknown), ETAA1 (unknown), FGD4 (unknown), FIG4 (unknown), GARS (unknown), MTNR1B (safety_allele), NDRG1 (unknown), RAB7A (unknown), RALBP1 (substrate), SARM1 (target), SEPTIN9 (unknown), SNU13 (unknown), TUBA4A (inhibitor), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 584 matched, 73 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barnett_2022.pdf` | Barnett S et al., Vincristine dosing, drug exposure and t…, European journal of cancer… (2022) | popPK | 10 | [10.1016/j.ejca.2021.09.014](https://doi.org/10.1016/j.ejca.2021.09.014) | [34657763](https://pubmed.ncbi.nlm.nih.gov/34657763) | A two-compartment population model is reported, but numeric disposition parameter estimates are absent from the provided evidence. |
| `Owellen_1977.pdf` | Owellen RJ et al., Pharmacokinetics of vindesine and vincr…, Cancer research (1977) | popPK | 10 | not captured | [872088](https://pubmed.ncbi.nlm.nih.gov/872088) | Human vincristine half-lives and distribution volumes are reported numerically in the evidence. |
| `Yuan_2025.pdf` | Yuan Y et al., Pharmacokinetic, Pharmacodynamic and Ph…, Clinical pharmacology and t… (2025) | popPK | 10 | [10.1002/cpt.3462](https://doi.org/10.1002/cpt.3462) | [39367622](https://pubmed.ncbi.nlm.nih.gov/39367622) | Human VCR PopPK is reported, but numeric disposition parameter estimates are not present in the provided evidence. |

<sub>queue written 2026-10-06T14:56:26.177993+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnett_2022 | relevant | 10 | 2 | A two-compartment population model is reported, but numeric disposition parameter estimates are absent from the provided evidence. |
| PGx | Beraldo-Neto_2024 | not_relevant | 0 | 0 | The study describes proteomic differences associated with cellular multidrug resistance but does not report a gene variant, genotype, or phenotype effect on a vincristine PK or PD parameter. |
| PGx | Błauż_2017 | not_relevant | 0 | 0 | The paper describes drug-selected cell lines and transporter expression, but does not report a gene-related effect on a vincristine PK or PD parameter. |
| popPK | Casanova_2023 | irrelevant | 0 | 0 | Vincristine is co-administered, but PK is evaluated only for regorafenib and irinotecan. |
| PGx | Centanni_2024 | not_relevant | 0 | 0 | CYP3A5 genotype was mentioned only in simulation population assumptions; no genotype effect on vincristine PK or PD parameters was estimated or reported. |
| PGx | Centanni_2024_2 | not_relevant | 2 | 0 | The text compares exposure-prediction approaches but gives no vincristine-specific genotype effect on a PK/PD parameter or fitted effect size. |
| PGx | Centanni_2026 | not_relevant | 2 | 1 | Genotype distributions are mentioned as part of model extrapolation, but no variant-specific effect on a vincristine PK or PD parameter is reported. |
| PGx | Cheon_2017 | not_relevant | 0 | 0 | The study examines P-gp inhibition and vincristine sensitivity in resistant cells, not effects of a gene variant, genotype, or phenotype on a vincristine PK/PD parameter. |
| PGx | Chieli_2009 | not_relevant | 0 | 0 | The study examines plant compounds inhibiting P-glycoprotein in vincristine-resistant cells, not how a gene variant, genotype, or phenotype changes a vincristine PK/PD parameter. |
| popPK | Chopra_2016 | irrelevant | 0 | 0 | Vincristine is only an in-vitro comparator, and no vincristine pharmacokinetic parameters are reported. |
| PD | Chopra_2016 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of AK301 and compares it to vincristine using fixed concentrations (e.g., 500 nM) without reporting a dose-response curve or numeric PD parameters for vincristine. |
| popPK | Clarion_2012 | irrelevant | 0 | 0 | Vincristine is only a comparator in cell-line assays, with no pharmacokinetic parameters reported. |
| PD | Clarion_2012 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro screening of new oxaphosphinane compounds, mentioning vincristine only as a qualitative comparator for toxicity and potency without providing any exposure-response or dose-response data for vincristine. |
| PGx | Dennison_2006 | not_relevant | 1 | 0 | The study compares vincristine metabolism by CYP3A4 and CYP3A5 in vitro but does not measure a variant, genotype, or phenotype effect on vincristine PK or PD. |
| PGx | Deshpande_2016 | not_relevant | 0 | 0 | The study evaluates ABCB1 genotype effects on acepromazine sedation, not vincristine pharmacokinetics or pharmacodynamics. |
| PGx | Fleming_2026 | not_relevant | 2 | 10 | Tumor ABCB1 upregulation is linked to vincristine resistance, but the paper does not report a gene variant/genotype/phenotype effect on a vincristine PK or PD parameter. |
| PGx | Gutierrez-Camino_2018 | not_relevant | 2 | 8 | Reports associations between miRNA SNPs and vincristine-induced neurotoxicity, but does not measure or quantify a vincristine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Harker_1985 | not_relevant | 0 | 0 | Reports acquired multidrug resistance and vincristine cross-resistance in selected cell lines, not a gene variant/genotype/phenotype effect on a vincristine PK or PD parameter. |
| PGx | Hofman_2021 | not_relevant | 0 | 0 | CYP3A4 or CYP3A5 overexpression did not affect vincristine activity, and the study reports no genotype-associated PK or PD parameter. |
| popPK | Igarashi_2021 | relevant | 9 | 2 | Population-PK variability estimates are present, but numeric typical CL, V, or Q values are not shown. |
| PD | Igarashi_2021 | not_relevant | 0 | 0 | The text only reports pharmacokinetic (PK) variability parameters (IIV, residual error) for a population PK model and contains no pharmacodynamic (PD) or exposure-response data. |
| PGx | Kellie_1988 | not_relevant | 0 | 0 | The paper reports treatment outcomes and toxicity but no gene variant/genotype/phenotype effect on vincristine PK or PD. |
| popPK | Knoerl_2025 | irrelevant | 0 | 0 | This human CIPN and genotype study reports no vincristine pharmacokinetic disposition parameters. |
| PGx | Kurian_2020 | not_relevant | 0 | 0 | The study examines hCAR activation and cyclophosphamide metabolism, not a genetic effect on vincristine PK or PD. |
| PGx | Kwan_2024 | not_relevant | 0 | 0 | No gene-related effect on a vincristine pharmacokinetic or pharmacodynamic parameter is reported; the metabolism findings concern 6MP. |
| PGx | Lee_1989 | not_relevant | 0 | 0 | The study reports no gene variant, genotype, or phenotype effect on a vincristine PK or PD parameter; it only notes no cross-resistance to vincristine. |
| popPK | Levêque_1996 | irrelevant | 0 | 0 | The paper reports vinorelbine pharmacokinetics, not quantitative disposition parameters for vincristine. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | Vincristine is only co-administered in R-CHOP; no vincristine pharmacokinetic parameters are reported. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for rituximab, not vincristine. |
| PGx | Mao_2024 | not_relevant | 1 | 0 | Tumor DME expression is associated with predicted vincristine sensitivity, but no gene variant/genotype/phenotype effect on a vincristine PK or PD parameter is reported. |
| PGx | Marques_2021 | not_relevant | 0 | 0 | The study examines quercetin’s effects on ABCB1 expression and efflux, not how a gene variant, genotype, or phenotype changes a vincristine PK/PD parameter. |
| PGx | Mealey_2015 | not_relevant | 0 | 0 | This review discusses P-glycoprotein-mediated drug interactions, not effects of a gene variant, genotype, or phenotype on vincristine PK or PD. |
| PGx | Mealey_2017 | not_relevant | 0 | 0 | The paper mentions vincristine as a canine P-glycoprotein substrate but reports no genotype-dependent effect on a vincristine PK or PD parameter. |
| popPK | Mehrdadi_2024 | irrelevant | 0 | 0 | Vincristine is only evaluated as a risk factor for taste changes; no pharmacokinetic parameters are reported. |
| PGx | Michaelis_2016 | not_relevant | 0 | 0 | The paper studies chemical modulation of ABCB1-mediated vincristine transport, not an effect of a gene variant, genotype, or phenotype on a vincristine PK or PD parameter. |
| PGx | Moore_2011 | not_relevant | 0 | 0 | The paper reports CYP3A5 genotypes but no genotype-associated change in vincristine PK or PD parameters. |
| PGx | Mortensen_2024 | not_relevant | 0 | 0 | The study examines transporter expression and pharmacological modulation, not gene variants/genotypes/phenotypes affecting a vincristine PK or PD parameter. |
| PGx | Mufti_2024 | not_relevant | 1 | 8 | Reports genetic associations with vincristine-induced neuropathy risk, not effects on a vincristine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Nakayama_2024 | not_relevant | 0 | 0 | The study reports vincristine sensitivity in resistant cell lines but does not link it to a gene variant, genotype, or phenotype. |
| popPK | Olszewska-Słonina_2004 | irrelevant | 0 | 0 | In-vitro melanoma-cell apoptosis and EC50 are reported, but no vincristine disposition parameters. |
| PGx | Raynaud_1993 | not_relevant | 0 | 0 | Reports an assay and pharmacokinetics for 1069C85, with no gene-variant effect on vincristine PK or PD. |
| PGx | Rossi_2017 | not_relevant | 0 | 0 | Reports tumor cfDNA mutations and treatment response, not a pharmacogenomic effect on a vincristine PK or PD parameter. |
| popPK | Rosson_2002 | irrelevant | 0 | 0 | This is an in-vitro drug-sensitivity study and reports no vincristine pharmacokinetic parameters. |
| popPK | Roundhill_2019 | irrelevant | 0 | 0 | This is an in-vitro drug-resistance study and reports no vincristine pharmacokinetic parameters. |
| PD | Roundhill_2019 | not_relevant | 1 | 0 | The paper discusses drug resistance mechanisms in osteosarcoma cells and mentions vincristine resistance qualitatively, but it does not report any exposure-response or dose-response analysis with numeric PD parameters for vincristine. |
| PGx | Sabnis_2019 | not_relevant | 2 | 8 | The paper reports that pharmacologic ABCB1 inhibition lowers vincristine IC50 in cell lines, but does not report a gene variant/genotype/phenotype effect on a vincristine PK or PD parameter. |
| popPK | Samineni_2022 | irrelevant | 0 | 0 | The PopPK analysis is for venetoclax; vincristine is only a co-administered R-CHOP component, with no vincristine PK values reported. |
| PD | Samineni_2022 | not_relevant | 0 | 0 | The paper reports exposure-response analyses for venetoclax, not vincristine; no PD parameters for vincristine are provided. |
| PGx | Syed_2021 | not_relevant | 0 | 0 | The study evaluates pharmacological P-glycoprotein inhibition in resistant cancer cell lines, not a gene variant, genotype, or phenotype effect on vincristine PK or PD. |
| PGx | Toksvang_2022 | not_relevant | 0 | 0 | The paper discusses vincristine pulse therapy but reports no gene-variant effect on a vincristine pharmacokinetic or pharmacodynamic parameter. |
| popPK | Toso_1995 | irrelevant | 0 | 0 | This review concerns vinorelbine, not vincristine, and gives no numeric vincristine disposition parameters. |
| PGx | Tsuruo_1981 | not_relevant | 0 | 0 | Reports differences in vincristine sensitivity among tumor cell populations, not effects of a gene variant, genotype, or phenotype on a PK/PD parameter. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on a vincristine PK or PD parameter is reported; CYP3A4 phenotyping is only suggested for future study. |
| popPK | Yuan_2025 | relevant | 10 | 2 | Human VCR PopPK is reported, but numeric disposition parameter estimates are not present in the provided evidence. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | Reports CYP3A-related vinblastine metabolism, not a pharmacogenomic effect on a vincristine PK or PD parameter. |
| PGx | Zhou_2018 | not_relevant | 0 | 0 | The case concerns vindesine, not vincristine; CYP3A5*3/*3 is proposed to explain vindesine accumulation, with no vincristine PK/PD effect reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:56 UTC</sub>
