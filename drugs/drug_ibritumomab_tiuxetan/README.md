<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;ibritumomab tiuxetan&quot;}]"></div>

# ibritumomab tiuxetan

- **generic name:** ibritumomab tiuxetan
- **ATC codes:** `V10XX02`
- **DrugBank:** [DB00078](https://go.drugbank.com/drugs/DB00078) · **PubChem:** not captured
- **groups:** approved

## About

Ibritumomab tiuxetan is a radioimmunotherapy drug, a monoclonal antibody radiopharmaceutical used to treat follicular lymphoma. It is an approved medication, though its European Union marketing authorisation has lapsed, so its use is now limited mainly to the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q635415](https://www.wikidata.org/wiki/Q635415) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Morschhauser_2018_f1](drugs/drug_ibritumomab_tiuxetan/IbritumomabTiuxetan_Morschhauser2018_f1.md) | — | 1-compartment (no model) | 6 | Morschhauser F et al., A new pharmacokinetic model for 90Y-ibr…, Scientific reports (2018) | [10.1038/s41598-018-33160-0](https://doi.org/10.1038/s41598-018-33160-0) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ f2](drugs/drug_ibritumomab_tiuxetan/IbritumomabTiuxetan_Morschhauser2018_f2.md) | — | 1-compartment (no model) | 10 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ liver](drugs/drug_ibritumomab_tiuxetan/IbritumomabTiuxetan_Morschhauser2018_liver.md) | — | 1-compartment (no model) | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ lumbar_vertebrae_l2_l4](drugs/drug_ibritumomab_tiuxetan/IbritumomabTiuxetan_Morschhauser2018_lumbar_vertebrae_l2_l4.md) | — | 1-compartment (no model) | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ spleen](drugs/drug_ibritumomab_tiuxetan/IbritumomabTiuxetan_Morschhauser2018_spleen.md) | — | 1-compartment (no model) | 6 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:55 | 10:11 | 0/5/0 | 0/0/0 | 0/0/0 | 161,200/26,558 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 12 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 5  ·  extracted 0  ·  needs_review 0  ·  rejected 5  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meerkhan_2014.pdf` | Meerkhan SA et al., Testis dosimetry in individual patients…, Physics in medicine and bio… (2014) | popPK | 8 | [10.1088/0031-9155/59/24/7889](https://doi.org/10.1088/0031-9155/59/24/7889) | [25426744](https://pubmed.ncbi.nlm.nih.gov/25426744) | The study applies compartmental pharmacokinetic modeling to ibritumomab tiuxetan in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T16:46:10.298434+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auger-Quittet_2014 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of outcomes (survival, response rates) and does not report pharmacokinetic parameters. |
| PD | Fisher_2009 | not_relevant | 0 | 0 | The paper reports radiation dosimetry (absorbed dose estimates) and biokinetics, not a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| PGx | Galimberti_2019 | not_relevant | 0 | 0 | The paper is a review on minimal residual disease (MRD) detection techniques in lymphomas and does not report pharmacogenomic effects on the PK/PD of ibritumomab tiuxetan. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of progression-free survival in non-Hodgkin lymphoma and does not report pharmacokinetic parameters for ibritumomab tiuxetan. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL using summary-level data and does not report any pharmacokinetic or pharmacodynamic parameters for ibritumomab tiuxetan. |
| popPK | Meerkhan_2014 | relevant | 8 | 2 | The study applies compartmental pharmacokinetic modeling to ibritumomab tiuxetan in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| PD | Mirick_2004 | not_relevant | 0 | 0 | The paper is a review of human anti-globulin antibody (HAGA) responses to monoclonal antibodies and does not report any pharmacodynamic or exposure-response data for ibritumomab tiuxetan. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetic modeling and does not contain any data or parameters for ibritumomab tiuxetan. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a general review on nanoparticle pharmacokinetic modeling and does not contain any specific data, analysis, or PD parameters for ibritumomab tiuxetan. |
| popPK | Sinnollareddy_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for epcoritamab, not ibritumomab tiuxetan. |
| PD | Witzig_1999 | not_relevant | 0 | 0 | The paper is a Phase I/II clinical trial reporting safety and efficacy outcomes (response rates, MTD) but does not provide pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Woillard_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciclosporin, not ibritumomab_tiuxetan. |
| PD | Woillard_2014 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic modeling and dose adjustment for ciclosporin, not ibritumomab tiuxetan, and contains no pharmacodynamic or exposure-response analysis. |
| PD | unknown_2003 | not_relevant | 0 | 0 | The text is a business and regulatory review of Iodine-131 Tositumomab (Bexxar) and does not contain any pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:46 UTC</sub>
