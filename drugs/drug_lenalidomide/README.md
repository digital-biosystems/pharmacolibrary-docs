<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;lenalidomide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenalidomide_Gupta2019_reference&quot;,&quot;label&quot;:&quot;Gupta_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Gupta2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Hughes2019_reference&quot;,&quot;label&quot;:&quot;Hughes_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lenalidomide

- **generic name:** lenalidomide
- **ATC codes:** `L04AX04`
- **DrugBank:** [DB00480](https://go.drugbank.com/drugs/DB00480) · **PubChem:** [CID 216326](https://pubchem.ncbi.nlm.nih.gov/compound/216326)
- **molar mass:** 259.2606 g/mol (C13H13N3O3) — DrugBank
- **groups:** approved, investigational

## About

Lenalidomide is an immunomodulating and anti-angiogenic drug used to treat blood cancers and related disorders, including multiple myeloma, myelodysplastic syndromes, and several types of lymphoma and leukemia. It is approved and widely used, with several authorised products in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425681](https://www.wikidata.org/wiki/Q425681) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lenalidomide | parent | 259.261 | C13H13N3O3 | DrugBank | [216326](https://pubchem.ncbi.nlm.nih.gov/compound/216326) | Hughes_2019, Kim_2026, Liang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:07 | 5:05 | 3/5/2 | 2/0/0 | 0/0/0 | 459,120/26,331 | einfracz / qwen3.8-27b | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2019_reference](drugs/drug_lenalidomide/Lenalidomide_Gupta2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Gupta N et al., Clinical Pharmacology of Ixazomib: The…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0702-1](https://doi.org/10.1007/s40262-018-0702-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hughes_2019_reference](drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Hughes JH et al., Population pharmacokinetics of lenalido…, British journal of clinical… (2019) | [10.1111/bcp.13873](https://doi.org/10.1111/bcp.13873) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Papathanasiou_2025_reference](drugs/drug_lenalidomide/Lenalidomide_Papathanasiou2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kim_2026_nonmem_final_model](drugs/drug_lenalidomide/Lenalidomide_Kim2026_nonmem_final_model.md) | — | 3-compartment (no model) | 7 | Kim H et al., Population Pharmacokinetics and Model-I…, Drug design, development an… (2026) | [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q76 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Liang_2024_reference](drugs/drug_lenalidomide/Lenalidomide_Liang2024_reference.md) | — | 2-compartment (no model) | 4 | Liang X et al., Population pharmacokinetics of lenalido…, Scientific reports (2024) | [10.1038/s41598-024-52460-2](https://doi.org/10.1038/s41598-024-52460-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Guglieri-López_2017_reference](drugs/drug_lenalidomide/Lenalidomide_GuglieriLpez2017_reference.md) | — | 1-compartment (no model) | 0 | Guglieri-López B et al., Population pharmacokinetics of lenalido…, Cancer chemotherapy and pha… (2017) | [10.1007/s00280-016-3228-y](https://doi.org/10.1007/s00280-016-3228-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2026_control](drugs/drug_lenalidomide/Lenalidomide_Kim2026_control.md) | — | 3-compartment (no model) | 12 | Kim H et al., Population Pharmacokinetics and Model-I…, Drug design, development an… (2026) | [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2026_moderate_ri](drugs/drug_lenalidomide/Lenalidomide_Kim2026_moderate_ri.md) | — | 3-compartment (no model) | 12 | Kim H et al., Population Pharmacokinetics and Model-I…, Drug design, development an… (2026) | [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2026_overall](drugs/drug_lenalidomide/Lenalidomide_Kim2026_overall.md) | — | 3-compartment (no model) | 12 | Kim H et al., Population Pharmacokinetics and Model-I…, Drug design, development an… (2026) | [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2026_severe_ri](drugs/drug_lenalidomide/Lenalidomide_Kim2026_severe_ri.md) | — | 3-compartment (no model) | 12 | Kim H et al., Population Pharmacokinetics and Model-I…, Drug design, development an… (2026) | [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Koiwai_2021_M_protein](drugs/drug_lenalidomide/pd_Koiwai_2021_M_protein.md) | serum M-protein ← isatuximab and lenalidomide · indirect response — drug inhibits the loss of serum M-protein | — | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Srimani_2022_Platelet](drugs/drug_lenalidomide/pd_Srimani_2022_Platelet.md) | Platelet count ← lenalidomide · indirect response — drug inhibits the production of Platelet count | — | Srimani JK et al., Population pharmacokinetic/pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12815](https://doi.org/10.1002/psp4.12815) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lenalidomide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CDH5 (target), CRBN (inhibitor), PTGS2 (negative modulator), TNF (inhibitor), TNFSF11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 10  ·  extracted 3  ·  needs_review 2  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Connarn_2018.pdf` | Connarn JN et al., Population Pharmacokinetics of Lenalido…, Clinical pharmacology in dr… (2018) | popPK | 10 | [10.1002/cpdd.372](https://doi.org/10.1002/cpdd.372) | [28724202](https://pubmed.ncbi.nlm.nih.gov/28724202) | The paper describes a population pharmacokinetic model for lenalidomide but the specific numeric parameter values (e.g., typical CL, V) are not present in the provided abstract text, only qualitative correlations and percentage changes. |
| `Guglieri-López_2017.pdf` | Guglieri-López B et al., Population pharmacokinetics of lenalido…, Cancer chemotherapy and pha… (2017) | popPK | 10 | [10.1007/s00280-016-3228-y](https://doi.org/10.1007/s00280-016-3228-y) | [28039509](https://pubmed.ncbi.nlm.nih.gov/28039509) | The paper reports a population PK model for lenalidomide in humans with qualitative descriptions of parameters (CL, V) and covariates, but specific numeric values are not visible in the provided text snippet. |
| `Hughes_2019.pdf` | Hughes JH et al., Population pharmacokinetics of lenalido…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13873](https://doi.org/10.1111/bcp.13873) | [30672004](https://pubmed.ncbi.nlm.nih.gov/30672004) | The paper reports a population pharmacokinetic model for lenalidomide with specific numeric estimates for apparent clearance (12 L/h), volume of distribution (68.8 L), and transit rate constant provided directly in the evidence. |

<sub>queue written 2026-10-07T00:03:24.248839+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burckhardt_2020 | irrelevant | 0 | 0 | The paper describes a simulation training program for pediatric trial staff and does not report any pharmacokinetic parameters or data for lenalidomide. |
| popPK | Connarn_2018 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for lenalidomide but the specific numeric parameter values (e.g., typical CL, V) are not present in the provided abstract text, only qualitative correlations and percentage changes. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of thalidomide's analgesic effects and only uses lenalidomide as a comparator, reporting no pharmacokinetic parameters. |
| popPK | Gupta_2019 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of ixazomib, not lenalidomide. |
| popPK | Ide_2022 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of elotuzumab, not lenalidomide, which is only mentioned as a co-administered comparator. |
| popPK | Koiwai_2021 | irrelevant | 3 | 1 | The study focuses on the PK/PD modeling of isatuximab; lenalidomide is a co-administered comparator agent for which only qualitative PK descriptions are provided without specific numeric parameter values in the text. |
| popPK | Lagrue_2015 | irrelevant | 0 | 0 | The paper reports immunological mechanisms and functional effects on NK cells, not quantitative pharmacokinetic disposition parameters. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for pomalidomide, not lenalidomide. |
| popPK | Papathanasiou_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for belantamab mafodotin and its metabolite cys-mcMMAF, not for lenalidomide, which is only mentioned as a co-administered drug in combination trials. |
| popPK | Passey_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elotuzumab and the impact of immunogenicity, with lenalidomide used only as a co-administered comparator drug. |
| popPK | Passey_2018 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of elotuzumab, not lenalidomide, and provides no PK parameters for lenalidomide. |
| popPK | Rachedi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of isatuximab, using lenalidomide only as a co-administered agent without reporting quantitative PK parameters for lenalidomide itself. |
| popPK | Srimani_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ixazomib, with lenalidomide acting only as a co-administered background therapy in the combination regimen. |
| popPK | Steichert_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for enalapril and its metabolite enalaprilat, not lenalidomide. |
| popPK | Takwale_2022 | irrelevant | 0 | 0 | The paper focuses on the development and antitumor activity of novel GSPT1 degraders, using lenalidomide only as a mechanistic reference without reporting any pharmacokinetic parameters. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of daratumumab, with lenalidomide serving only as a co-administered background therapy. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:03 UTC</sub>
