<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;flupentixol&quot;}]"></div>

# flupentixol

- **generic name:** flupentixol
- **ATC codes:** `N05AF01`
- **DrugBank:** [DB00875](https://go.drugbank.com/drugs/DB00875) · **PubChem:** [CID 5281881](https://pubchem.ncbi.nlm.nih.gov/compound/5281881)
- **molar mass:** 434.52 g/mol (C23H25F3N2OS) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Flupentixol is an antipsychotic of the thioxanthene class used to treat psychotic disorders such as schizophrenia. It remains an approved medicine and is used in many countries, though it has not been authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27164953](https://www.wikidata.org/wiki/Q27164953) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:34 | 0:50 | 0/0/0 | 1/0/0 | 0/0/0 | 48,219/2,071 | einfracz / qwen3.8-27b | 14 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_MERS_CoV_S_pseudovirus_infection](drugs/drug_flupentixol/pd_Yang_2021_MERS_CoV_S_pseudovirus_infection.md) | MERS-CoV S pseudovirus infection ← Flupenthixol · inhibition effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS2_S_pseudovirus_infectivity](drugs/drug_flupentixol/pd_Yang_2021_SARS2_S_pseudovirus_infectivity.md) | SARS2-S pseudovirus infectivity ← Flupenthixol · inhibition effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS_CoV_2_virus_replication](drugs/drug_flupentixol/pd_Yang_2021_SARS_CoV_2_virus_replication.md) | SARS-CoV-2 virus replication ← Flupenthixol · inhibition effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS_CoV_S_pseudovirus_infection](drugs/drug_flupentixol/pd_Yang_2021_SARS_CoV_S_pseudovirus_infection.md) | SARS-CoV S pseudovirus infection ← Flupenthixol · inhibition effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flupentixol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CES1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), CHRM1 (target), DDC (inducer), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anand-Srivastava_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenylate cyclase where flupentixol is used only as a pharmacological antagonist to confirm dopamine receptor involvement, not a PK study. |
| popPK | Barbas_2006 | irrelevant | 0 | 0 | The study characterizes a dopamine receptor in Aplysia and uses flupentixol only as a pharmacological probe (inverse agonist) to demonstrate receptor activity, not to measure its pharmacokinetic parameters. |
| popPK | Brown_1979 | irrelevant | 0 | 0 | The paper characterizes alpha-adrenergic receptors in rat superior cervical ganglia using flupentixol only as a negative control antagonist, containing no pharmacokinetic data for the drug. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | This is a pharmacological study characterizing D-1 receptors in rabbit retina using flupentixol as a probe drug, not a pharmacokinetic study. |
| popPK | Josselyn_1993 | irrelevant | 0 | 0 | The study investigates the behavioral effects (place preference) and pharmacological interaction (dopamine blockade) of flupentixol, containing no pharmacokinetic or disposition parameters. |
| popPK | Muraki_1994 | irrelevant | 0 | 0 | The paper is an electrophysiological study of calcium currents in guinea-pig smooth muscle, where flupenthixol is used only as a dopamine receptor antagonist probe to characterize a receptor, and no pharmacokinetic parameters are reported. |
| popPK | Ohta_2009 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology study in silkworm receptors where flupentixol is used only as a comparator antagonist, not as the subject of a PK study. |
| popPK | Olivier_2015 | irrelevant | 0 | 0 | The study is a clinical trial assessing cognitive performance in schizophrenia and does not report any pharmacokinetic parameters for flupenthixol. |
| popPK | Richfield_1991 | irrelevant | 0 | 0 | The paper describes in vitro receptor binding characteristics of a radioligand in rat brain and uses flupentixol only as a competitor/displacer to define specific binding, rather than reporting pharmacokinetic disposition parameters for flupentixol. |
| popPK | Sugamori_1995 | irrelevant | 0 | 0 | The paper describes a Drosophila dopamine receptor study where flupentixol is used only as a ligand for binding affinity measurements, not as a subject for pharmacokinetic analysis. |
| popPK | Vayssette_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine receptors in dog pancreatic acini where flupenthixol (not flupentixol) is used as a probe ligand/antagonist, providing no pharmacokinetic disposition parameters. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological screening for antiviral activity against SARS-CoV-2 and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for flupentixol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
