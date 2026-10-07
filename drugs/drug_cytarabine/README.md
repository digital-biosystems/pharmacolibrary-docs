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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cytarabine | parent | 243.217 | C9H13N3O5 | DrugBank | [6253](https://pubchem.ncbi.nlm.nih.gov/compound/6253) | Wang_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:41 | 1:47 | 0/2/1 | 1/0/0 | 0/0/0 | 213,963/9,880 | einfracz / qwen3.8-27b | 5 | 3/2 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: not captured</sub> | [Crook_2013_healthy dogs](drugs/drug_cytarabine/Cytarabine_Crook2013_healthy_dogs.md) | — | — (no model) | 0 | Crook KI et al., The pharmacokinetics of cytarabine in d…, Journal of veterinary pharm… (2013) | [10.1111/jvp.12008](https://doi.org/10.1111/jvp.12008) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_overall_p_value](drugs/drug_cytarabine/Cytarabine_Wang2019_overall_p_value.md) | — | general linear (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_total_cytarabine](drugs/drug_cytarabine/Cytarabine_Wang2019_total_cytarabine.md) | — | general linear (no model) | 0 | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_apoptosis](drugs/drug_cytarabine/pd_Guchelaar_1998_apoptosis.md) | apoptotic cells ← cytarabine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_necrosis](drugs/drug_cytarabine/pd_Guchelaar_1998_necrosis.md) | necrotic cells ← cytarabine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cytarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCC10 (substrate), CDA (substrate), DCK (substrate), DCTD (substrate), DNA (cross-linking/alkylation), NT5E (substrate), POLB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:40 UTC</sub>
