<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cytarabine&quot;}]"></div>

# cytarabine

- **generic name:** cytarabine
- **ATC codes:** `L01BC01`, `L01XY01`
- **DrugBank:** [DB00987](https://go.drugbank.com/drugs/DB00987) · **PubChem:** [CID 6253](https://pubchem.ncbi.nlm.nih.gov/compound/6253)
- **molar mass:** 243.2166 g/mol (C9H13N3O5) — DrugBank
- **groups:** approved, investigational

## About

Cytarabine is an antineoplastic antimetabolite used to treat blood cancers such as acute myeloid leukemia, other leukemias, and several lymphomas, as well as myelodysplastic syndrome and meningeal tumors. It is an approved medicine, appears on the WHO essential medicines list, and is widely used in cancer care, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q180983](https://www.wikidata.org/wiki/Q180983) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cytarabine | parent | 243.217 | C9H13N3O5 | DrugBank | [6253](https://pubchem.ncbi.nlm.nih.gov/compound/6253) | Wang_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:33 | 12:26 | 0/3/0 | 1/0/0 | 0/0/0 | 229,413/29,053 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5), gpt-oss-120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_overall_p_value](drugs/drug_cytarabine/Cytarabine_Wang2019_overall_p_value.md) | — | 1-compartment (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_population_estimate](drugs/drug_cytarabine/Cytarabine_Wang2019_population_estimate.md) | — | 1-compartment (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_population_estimate_2](drugs/drug_cytarabine/Cytarabine_Wang2019_population_estimate_2.md) | — | 1-compartment (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_apoptotic_cells](drugs/drug_cytarabine/pd_Guchelaar_1998_apoptotic_cells.md) | apoptotic cells ← cytarabine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_necrotic_cells](drugs/drug_cytarabine/pd_Guchelaar_1998_necrotic_cells.md) | necrotic cells ← cytarabine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_vital_cells](drugs/drug_cytarabine/pd_Guchelaar_1998_vital_cells.md) | vital cells ← cytarabine · inhibition effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cytarabine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCC10 (substrate), CDA (substrate), DCK (substrate), DCTD (substrate), DNA (cross-linking/alkylation), NT5E (substrate), POLB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crook_2013.pdf` | Crook KI et al., The pharmacokinetics of cytarabine in d…, Journal of veterinary pharm… (2013) | popPK | 10 | [10.1111/jvp.12008](https://doi.org/10.1111/jvp.12008) | [22943060](https://pubmed.ncbi.nlm.nih.gov/22943060) | The study reports quantitative pharmacokinetic parameters (half-life, Cmax, Vd) for cytarabine in dogs with values explicitly listed in the text. |
| `Krogh-Madsen_2012.pdf` | Krogh-Madsen M et al., Population pharmacokinetics of cytarabi…, Cancer chemotherapy and pha… (2012) | popPK | 10 | [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z) | [22212298](https://pubmed.ncbi.nlm.nih.gov/22212298) | The study is a population PK analysis of cytarabine in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Nikanjam_2018.pdf` | Nikanjam M et al., Persistent cytarabine and daunorubicin…, Cancer chemotherapy and pha… (2018) | popPK | 10 | [10.1007/s00280-017-3484-5](https://doi.org/10.1007/s00280-017-3484-5) | [29167924](https://pubmed.ncbi.nlm.nih.gov/29167924) | The paper describes a population PK model for cytarabine (in CPX-351) in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Imai_2025.pdf` | Imai S et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2025) | popPK | 8 | [10.1016/j.dmpk.2024.101038](https://doi.org/10.1016/j.dmpk.2024.101038) | [39729780](https://pubmed.ncbi.nlm.nih.gov/39729780) | The paper describes a population PK analysis for CPX-351 (which contains cytarabine) in humans, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-15T03:22:26.826569+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2019 | irrelevant | 0 | 0 | The study focuses on the exposure-response analysis of venetoclax, with cytarabine serving only as a co-administered low-dose therapy (LDAC) rather than the subject of PK parameter estimation. |
| popPK | Auger-Quittet_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (survival, response rates) for a chemotherapy regimen containing cytarabine, and does not report any pharmacokinetic parameters. |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with cytarabine serving only as a co-administered comparator agent. |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationships of venetoclax, not cytarabine. |
| popPK | Dahi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of melphalan, with cytarabine only mentioned as a component of the BEAM regimen without any PK parameters reported for it. |
| popPK | Guchelaar_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic model of apoptosis and necrosis, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Imai_2025 | relevant | 8 | 0 | The paper describes a population PK analysis for CPX-351 (which contains cytarabine) in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sorafenib, with cytarabine serving only as a co-administered drug. |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic screening of radiosensitizers in glioblastoma cells and does not report pharmacokinetic parameters for cytarabine. |
| popPK | Jost_2020 | relevant | 8 | 2 | The paper develops a population PK/PD model for cytarabine in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text and are referenced as being in Table S1 of the supplementary material. |
| popPK | Krogh-Madsen_2012 | relevant | 10 | 2 | The study is a population PK analysis of cytarabine in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Megías-Vericat_2019 | irrelevant | 0 | 0 | The study is an ex-vivo pharmacodynamic (PD) analysis of drug sensitivity (EC50, Emax) in bone marrow samples, not a pharmacokinetic (PK) study reporting disposition parameters like clearance or volume for cytarabine. |
| popPK | Nikanjam_2018 | relevant | 10 | 2 | The paper describes a population PK model for cytarabine (in CPX-351) in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Olíva_2026 | irrelevant | 0 | 0 | The study focuses on patient-reported outcomes and quality of life in AML patients, with no pharmacokinetic data for cytarabine. |
| popPK | Pereira-Vieira_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chemo-sensitization using EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume for cytarabine. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | The study is an in-vitro virology/toxicology method comparison for influenza antivirals and does not report pharmacokinetic parameters for cytarabine. |
| PD | Wang_2019 | not_relevant | 3 | 1 | The paper reports qualitative exposure-response trends using quartiles (higher exposure associated with better efficacy/lower mortality) but does not provide a formal PD model or numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| popPK | Zounkova_2010 | irrelevant | 0 | 0 | The study assesses ecotoxicity and genotoxicity in environmental organisms (Daphnia, algae, bacteria), not pharmacokinetic disposition parameters in humans or animals. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:22 UTC</sub>
