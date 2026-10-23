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

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wang_2019_overall_p_value](drugs/drug_cytarabine/Cytarabine_Wang2019_overall_p_value.md) | — | general linear (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ total_cytarabine](drugs/drug_cytarabine/Cytarabine_Wang2019_total_cytarabine.md) | — | general linear (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_apoptosis](drugs/drug_cytarabine/pd_Guchelaar_1998_apoptosis.md) | apoptotic cells ← cytarabine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_necrosis](drugs/drug_cytarabine/pd_Guchelaar_1998_necrosis.md) | necrotic cells ← cytarabine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:41 | 1:47 | 0/2/0 | 1/0/0 | 0/0/0 | 213,963/9,880 | einfracz / qwen3.8-27b | 5 | 3/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 53 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crook_2013.pdf` | Crook KI et al., The pharmacokinetics of cytarabine in d…, Journal of veterinary pharm… (2013) | popPK | 10 | [10.1111/jvp.12008](https://doi.org/10.1111/jvp.12008) | [22943060](https://pubmed.ncbi.nlm.nih.gov/22943060) | The study reports quantitative PK parameters (half-life, Cmax, Vd) for cytarabine in dogs directly in the text. |
| `Nikanjam_2018.pdf` | Nikanjam M et al., Persistent cytarabine and daunorubicin…, Cancer chemotherapy and pha… (2018) | popPK | 10 | [10.1007/s00280-017-3484-5](https://doi.org/10.1007/s00280-017-3484-5) | [29167924](https://pubmed.ncbi.nlm.nih.gov/29167924) | The paper describes a population PK model for cytarabine (as part of CPX-351) in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Imai_2025.pdf` | Imai S et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2025) | popPK | 9 | [10.1016/j.dmpk.2024.101038](https://doi.org/10.1016/j.dmpk.2024.101038) | [39729780](https://pubmed.ncbi.nlm.nih.gov/39729780) | The paper describes a population PK analysis for CPX-351 (which contains cytarabine), but the specific numeric parameter values are not present in the provided evidence. |
| `Krogh-Madsen_2012.pdf` | Krogh-Madsen M et al., Population pharmacokinetics of cytarabi…, Cancer chemotherapy and pha… (2012) | popPK | 9 | [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z) | [22212298](https://pubmed.ncbi.nlm.nih.gov/22212298) | The paper describes a population PK study of cytarabine, but specific numeric parameter values (like median CL or V) are not present in the provided evidence, likely residing in tables or figures not included. |

<sub>queue written 2026-10-07T16:40:39.564022+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of venetoclax, with cytarabine only serving as a comparator therapy without any reported PK parameters for cytarabine itself. |
| popPK | Auger-Quittet_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (survival, response) and does not report pharmacokinetic parameters for cytarabine. |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with cytarabine only mentioned as a co-administered drug. |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationships of venetoclax, not cytarabine. |
| popPK | Dahi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of melphalan, and cytarabine is only mentioned as part of the BEAM regimen without any PK parameter reporting. |
| popPK | Guchelaar_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic analysis of apoptosis and necrosis, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Imai_2025 | relevant | 9 | 0 | The paper describes a population PK analysis for CPX-351 (which contains cytarabine), but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sorafenib, with cytarabine only mentioned as a co-administered comparator drug. |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The paper is an in-vitro radiobiology study using cytarabine as a test compound for radiosensitization, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Jost_2020 | relevant | 8 | 2 | The study develops a population PK/PD model for cytarabine in humans, but the specific numeric parameter values for cytarabine clearance and volume are not present in the provided text (referenced in Table S1 of Supplementary Material or taken from a previous publication [34]). |
| popPK | Krogh-Madsen_2012 | relevant | 9 | 2 | The paper describes a population PK study of cytarabine, but specific numeric parameter values (like median CL or V) are not present in the provided evidence, likely residing in tables or figures not included. |
| popPK | Megías-Vericat_2019 | irrelevant | 0 | 0 | The study reports ex-vivo pharmacodynamic parameters (EC50, Emax) for cytarabine and anthracyclines, not in-vivo pharmacokinetic parameters (CL, V, etc.). |
| popPK | Nikanjam_2018 | relevant | 10 | 2 | The paper describes a population PK model for cytarabine (as part of CPX-351) in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Olíva_2026 | irrelevant | 0 | 0 | The study focuses on patient-reported outcomes and quality of life for quizartinib in AML, with cytarabine mentioned only as part of the background chemotherapy regimen, and no cytarabine pharmacokinetic parameters are reported. |
| popPK | Pereira-Vieira_2025 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on chemo-sensitization using EC50 values, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for cytarabine. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | The paper is an in-vitro study comparing antiviral assays and does not contain pharmacokinetic data for cytarabine. |
| PD | Wang_2019 | not_relevant | 3 | 1 | The paper reports qualitative exposure-response trends using quartiles (higher exposure associated with better efficacy/lower mortality) but does not provide a formal PD model or numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| popPK | Zounkova_2010 | irrelevant | 0 | 0 | The study assesses ecotoxicity and genotoxicity (EC50, MGC) in crustaceans, algae, and bacteria, not pharmacokinetic disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:40 UTC</sub>
