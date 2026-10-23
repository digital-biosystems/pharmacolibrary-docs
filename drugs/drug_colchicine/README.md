<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;colchicine&quot;}]"></div>

# colchicine

- **generic name:** colchicine
- **ATC codes:** `M04AC01`, `M04AC51`
- **DrugBank:** [DB01394](https://go.drugbank.com/drugs/DB01394) · **PubChem:** [CID 2833](https://pubchem.ncbi.nlm.nih.gov/compound/2833)
- **molar mass:** 399.443 g/mol (C22H25NO6) — DrugBank
- **groups:** approved, investigational

## About

Colchicine is a medicine used mainly to treat gout, and also conditions such as pericarditis, Behçet's disease and familial Mediterranean fever. It is an approved, widely used antigout drug, and in the European Union it is also being considered for use in heart and blood vessel diseases such as myocardial infarction, stroke and coronary artery disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q326224](https://www.wikidata.org/wiki/Q326224) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| colchicine | parent | 399.443 | C22H25NO6 | DrugBank | [2833](https://pubchem.ncbi.nlm.nih.gov/compound/2833) | Rochdi_1994, Wright_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Rochdi_1994_reference](drugs/drug_colchicine/Colchicine_Rochdi1994_reference.md) | — | 1-compartment (no model) | 7 | Rochdi M et al., Pharmacokinetics and absolute bioavaila…, European journal of clinica… (1994) | [10.1007/BF00194404](https://doi.org/10.1007/BF00194404) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Wright_2025_reference](drugs/drug_colchicine/Colchicine_Wright2025_reference.md) | — | 1-compartment (no model) | 3 | Wright DFB et al., The Influence of Patient Factors on the…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01551-y](https://doi.org/10.1007/s40262-025-01551-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=colchicine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C8` inhibitor, `CYP2E1` inducer, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TUBB (binder), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:21 | 1:47 | 0/2/0 | 0/0/0 | 0/0/0 | 194,841/8,741 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rochdi_1994.pdf` | Rochdi M et al., Pharmacokinetics and absolute bioavaila…, European journal of clinica… (1994) | popPK | 10 | [10.1007/BF00194404](https://doi.org/10.1007/BF00194404) | [7957521](https://pubmed.ncbi.nlm.nih.gov/7957521) | The paper reports quantitative disposition parameters (CL, V, half-life) for colchicine in humans with values clearly visible in the text. |
| `Thomas_1989.pdf` | Thomas G et al., Zero-order absorption and linear dispos…, European journal of clinica… (1989) | popPK | 10 | [10.1007/BF00609430](https://doi.org/10.1007/BF00609430) | [2591469](https://pubmed.ncbi.nlm.nih.gov/2591469) | The paper reports specific quantitative pharmacokinetic parameters (half-life, Vss/f, CL/f) for colchicine in humans directly in the abstract text. |

<sub>queue written 2026-10-07T03:20:06.665906+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Banerjee_2023 | irrelevant | 0 | 0 | The study is a meta-analysis of SGLT2 inhibitors' effect on gout risk where colchicine is only a comparator component of a composite outcome, not a PK subject. |
| popPK | Chopra_2016 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on mitotic arrest and apoptosis where colchicine is used only as a comparator agent, not a subject of pharmacokinetic analysis. |
| popPK | Choudhary_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo efficacy of novel microtubule inhibitors that bind to the colchicine site, but it does not report the pharmacokinetic parameters (CL, V, etc.) of colchicine itself. |
| popPK | Declèves_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter kinetics in cell lines, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for colchicine in humans or animals. |
| popPK | Kohl_2023 | irrelevant | 0 | 0 | This is an in vitro toxicology study using an electrochemical membrane sensor and cell viability assays to measure toxicity (EC50, LoD), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kreydiyyeh_1992 | irrelevant | 0 | 0 | The study investigates the effect of colchicine on linoleic acid transport in rat jejunal enterocytes, using colchicine as a mechanistic tool rather than as the subject of pharmacokinetic analysis. |
| popPK | Quarmby_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium influx in Chlamydomonas algae, using colchicine only as a tool compound, and reports no pharmacokinetic parameters. |
| popPK | Sato_2021 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of colchicine in constrictive pericarditis using echocardiographic endpoints, not pharmacokinetics. |
| popPK | Takahashi_1995 | irrelevant | 0 | 0 | The paper uses colchicine as a neurotoxin to create hippocampal lesions in rats for a behavioral study; it does not measure pharmacokinetic parameters of colchicine. |
| popPK | Ughetto_2026 | irrelevant | 0 | 0 | This study investigates colchicine as an anti-inflammatory adjunct in heart transplantation preservation, reporting biomarkers (IL-6, Troponin I, etc.) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Weinling_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thiocolchicoside, not colchicine. |
| popPK | Zafar_2017 | irrelevant | 0 | 0 | The paper is an in-vitro molecular modeling and GPCR screening study for thieno[2,3-b]pyridines, where colchicine is only mentioned as a reference binding site in tubulin, not as the subject of a PK study. |
| popPK | Zaja_2013 | irrelevant | 0 | 0 | The study focuses on environmental contaminants inhibiting P-glycoprotein in fish cells, with colchicine used only as a cytotoxicity modulator/substrate rather than as a subject drug for pharmacokinetic profiling. |
| popPK | Zefirova_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and cytotoxicity of colchicine conjugates, not a pharmacokinetic study. |
| popPK | Zefirova_2017 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation (cytotoxicity/microtubule effects) of new antimitotic agents related to tubuloclustin, with no pharmacokinetic parameters reported for colchicine. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of multidrug resistance using colchicine as a P-gp substrate/probe, rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | The study is an ecotoxicity/developmental toxicity assessment using freshwater snails and does not report pharmacokinetic parameters for colchicine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:20 UTC</sub>
