<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;iproniazide&quot;}]"></div>

# iproniazide

- **generic name:** iproniazide
- **ATC codes:** `N06AF05`
- **DrugBank:** [DB04818](https://go.drugbank.com/drugs/DB04818) · **PubChem:** [CID 3748](https://pubchem.ncbi.nlm.nih.gov/compound/3748)
- **molar mass:** 179.219 g/mol (C9H13N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Iproniazide is a monoamine oxidase inhibitor that was used as an antidepressant. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421368](https://www.wikidata.org/wiki/Q421368) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 13,462/585 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iproniazide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP2D6` inhibitor, `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fan_1994.pdf` | Fan P, Effects of antidepressants on the inwar…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13140.x](https://doi.org/10.1111/j.1476-5381.1994.tb13140.x) | [7522857](https://www.ncbi.nlm.nih.gov/pubmed/7522857) | metadata signals extractable PD data (IC50) |
| `Zhi_2014.pdf` | Zhi KK et al., Desmodeleganine, a new alkaloid from th…, Fitoterapia (2014) | pd | 4 | [10.1016/j.fitote.2014.07.022](https://doi.org/10.1016/j.fitote.2014.07.022) | [25102471](https://www.ncbi.nlm.nih.gov/pubmed/25102471) | metadata signals extractable PD data (IC50) |
| `Ziance_1977.pdf` | Ziance RJ et al., Influence of MAO inhibitors on uptake a…, Archives internationales de… (1977) | pd | 4 | not captured | [921400](https://www.ncbi.nlm.nih.gov/pubmed/921400) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T18:46:56.523781+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burlet_1976 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ganglionic excitability and ultrastructure, not a pharmacokinetic study, and reports no disposition parameters for iproniazide. |
| PD | Burlet_1976 | not_relevant | 1 | 0 | The paper only qualitatively states that iproniazide did not diminish ganglionic excitability at sub-toxic doses, without providing numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Carradori_2013 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on MAO inhibitors where iproniazide is only mentioned as a structural scaffold component, with no pharmacokinetic data reported. |
| PD | Carradori_2013 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel hydrazothiazole derivatives, not a pharmacodynamic or exposure-response relationship for iproniazide itself. |
| popPK | Chesher_1974 | irrelevant | 0 | 0 | Iproniazide is used only as a premedication agent to test mechanisms of cannabis interaction, and no pharmacokinetic parameters are reported. |
| PD | Chesher_1974 | not_relevant | 0 | 0 | The paper studies cannabis and anaesthetics; iproniazide is only mentioned as an ineffective premedication agent with no dose-response or PD parameters reported. |
| popPK | Dodson_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin uptake in guinea pig cells where iproniazide is used only as a non-specific MAO inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Dodson_2004 | not_relevant | 0 | 0 | The paper reports kinetic parameters (Km, Vmax, IC50) for serotonin uptake and metabolism in cell culture, not a pharmacodynamic exposure-response or dose-response relationship for iproniazide as a therapeutic agent. |
| popPK | Fan_1994 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Fan_1994 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on 5-HT3 receptors in rat neurons but does not mention iproniazide or report any exposure-response or dose-response data for it. |
| popPK | Fisar_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MAO inhibition where iproniazide is used only as a comparator, with no pharmacokinetic parameters reported. |
| PD | Fisar_2010 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for cannabinoids (THC, AEA, WIN), not for iproniazide; iproniazide is only mentioned as a reference standard. |
| popPK | Fritze_1993 | irrelevant | 0 | 0 | The paper is a review of neurochemical hypotheses in depression and mentions iproniazide only in the historical context of its discovery, containing no pharmacokinetic parameters. |
| PD | Fritze_1993 | not_relevant | 1 | 0 | The text is a qualitative review of the adrenergic-cholinergic hypothesis and does not provide numeric PD parameters or specific exposure-response data for iproniazide. |
| popPK | Gankina_1982 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MAO inhibition, not a pharmacokinetic study, and reports no disposition parameters for iproniazide. |
| PD | Gankina_1982 | not_relevant | 3 | 2 | The paper reports a qualitative inhibitory effect of iproniazide on MAO activity but does not provide specific numeric PD parameters (like IC50) or a dose-response curve for iproniazide in the provided text. |
| popPK | He_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on MAO inhibitors where iproniazide is used only as a reference compound for IC50 comparison, not as a subject for pharmacokinetic analysis. |
| PD | He_2014 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new compounds and iproniazide as a reference, but does not report a pharmacodynamic exposure-response or dose-response relationship model for iproniazide. |
| popPK | Kim_2013 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on MAO inhibition where iproniazide is used only as a positive control, reporting no pharmacokinetic parameters. |
| PD | Kim_2013 | not_relevant | 3 | 3 | The paper reports in vitro enzyme inhibition IC50 values for iproniazide as a reference standard, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship in a biological system. |
| popPK | LOOMER_1957 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PD | LOOMER_1957 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to evaluate the pharmacodynamic relationship. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study for Alzheimer's disease that identifies iproniazide as a candidate based on gene perturbation signatures; it does not report a pharmacogenomic effect on specific PK or PD parameters of iproniazide. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper focuses on the design and synthesis of novel MAO-B inhibitors, using iproniazide only as a reference compound for potency comparison, with no pharmacokinetic data reported. |
| PD | Liu_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds and compares them to iproniazide, but does not report a pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for iproniazide itself. |
| popPK | Matheny_1976 | irrelevant | 0 | 0 | The paper is a pharmacological study on temperature sensitivity of adrenoceptors in rabbit iris muscle, using iproniazid only as a tool compound (MAO inhibitor) and reporting no pharmacokinetic parameters. |
| PD | Matheny_1976 | not_relevant | 0 | 0 | The paper investigates the effect of temperature on adrenoceptor responsiveness in rabbit iris muscle, using iproniazide only as a negative control to rule out enzyme involvement, and does not report any pharmacodynamic or exposure-response relationship for iproniazide itself. |
| popPK | Matos_2010 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on MAO-B inhibitors where iproniazide is used only as a reference inhibitor, with no pharmacokinetic parameters reported. |
| PD | Matos_2010 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new coumarin derivatives using iproniazide only as a reference standard, and does not report any pharmacodynamic or exposure-response relationship for iproniazide itself. |
| popPK | Matos_2011 | irrelevant | 0 | 0 | The study is a pharmacological evaluation of MAO inhibitory activity where iproniazide is used only as a reference compound, not a subject of pharmacokinetic analysis. |
| PD | Matos_2011 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new coumarin compounds, using iproniazide only as a reference standard, and does not report a pharmacodynamic or exposure-response relationship for iproniazide itself. |
| popPK | Matsuki_1994 | irrelevant | 0 | 0 | The provided text is metadata for a software tool (GROBID) and does not contain any pharmacokinetic data for iproniazide. |
| popPK | Pan_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on MAO inhibitors where iproniazide is used only as a reference compound for IC50 comparison, not as a subject for pharmacokinetic analysis. |
| PD | Pan_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for new compounds, not in vivo pharmacodynamic or exposure-response relationships for iproniazide. |
| popPK | Peet_1995 | irrelevant | 0 | 0 | The paper is a review of drug-induced mania and mentions iproniazide only as a potential cause, containing no pharmacokinetic data or parameters. |
| PD | Peet_1995 | not_relevant | 1 | 0 | The text is a qualitative review listing iproniazide as a drug that may induce mania, but it provides no concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Sitaram_1987 | irrelevant | 0 | 0 | Iproniazide is used as a mechanism-based inhibitor of monoamine oxidase (MAO) to alter the metabolism of 5-MeO-DMT and DM, not as the subject of pharmacokinetic parameter determination. |
| popPK | Steinberg_1975 | irrelevant | 0 | 0 | The study focuses on serotonin uptake in isolated guinea pig lungs and mentions iproniazid only as an inhibitor that had no effect, without reporting any pharmacokinetic parameters for iproniazid. |
| popPK | Voican_2014 | irrelevant | 0 | 0 | The paper is a clinical review of antidepressant-induced liver injury and does not report any pharmacokinetic parameters for iproniazide. |
| PD | Voican_2014 | not_relevant | 1 | 0 | The paper is a clinical review of drug-induced liver injury that qualitatively states toxicity is generally unrelated to dosage and does not provide any numeric PD parameters or exposure-response data. |
| popPK | Wei_2016 | irrelevant | 0 | 0 | The paper is a pharmacological study on MAO inhibition where iproniazide is used only as a reference standard, not as the subject of a pharmacokinetic analysis. |
| PD | Wei_2016 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for stilbenes using iproniazide only as a reference standard, not a pharmacodynamic or exposure-response analysis of iproniazide itself. |
| popPK | Wei_2016_2 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Wei_2016_2 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of novel fungal lactams (Colletotrilactam A-D) and does not contain any pharmacodynamic or exposure-response data for iproniazide. |
| popPK | Yamada_1993 | irrelevant | 0 | 0 | The study investigates the neurochemical and enzymatic mechanisms (MAO inhibition, neurotransmitter levels) of iproniazide in rat brain, not its pharmacokinetic disposition parameters. |
| popPK | Zhi_2014 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Zhi_2014 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of desmodeleganine, not iproniazide, and does not report any pharmacodynamic or exposure-response data for iproniazide. |
| popPK | Ziance_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of norepinephrine uptake inhibition, not a pharmacokinetic study reporting disposition parameters for iproniazide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
