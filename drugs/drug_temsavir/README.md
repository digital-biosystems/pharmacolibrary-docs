<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Temsavir&quot;}]"></div>

# Temsavir

- **generic name:** Temsavir
- **ATC codes:** not captured
- **DrugBank:** [DB14675](https://go.drugbank.com/drugs/DB14675) · **PubChem:** not captured
- **molar mass:** 473.493 g/mol (C24H23N7O4) — DrugBank
- **groups:** investigational

## About

<p><b>Description (Wikidata).</b> chemical compound</p>

<p><small>Source: <a href="https://www.wikidata.org/wiki/Q27259369">Wikidata</a> · <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temsavir | parent | 473.493 | C24H23N7O4 | DrugBank | — | Parasrampuria_2025 |
| fostemsavir | metabolite | 583.498 | C25H26N7O8P | PubChem | [11319217](https://pubchem.ncbi.nlm.nih.gov/compound/11319217) | Parasrampuria_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:18 | 3:11 | 0/1/0 | 0/2/0 | 0/0/0 | 125,722/5,363 | einfracz / qwen3.8-27b | 8 | 0/4 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Parasrampuria_2025_reference](drugs/drug_temsavir/Temsavir_Parasrampuria2025_reference.md) | — | 1-compartment (no model) | 5 | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Parasrampuria_2025_HIV_1_RNA_0_5_log10_decrease](drugs/drug_temsavir/pd_Parasrampuria_2025_HIV_1_RNA_0_5_log10_decrease.md) | Proportion of subjects with &gt;0.5 log10 decrease in plasma HIV-1 RNA on Day 8 ← temsavir · categorical (graded) response model | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Parasrampuria_2025_HIV_1_RNA_1_log10_decrease](drugs/drug_temsavir/pd_Parasrampuria_2025_HIV_1_RNA_1_log10_decrease.md) | Proportion of subjects with &gt;1 log10 decrease in plasma HIV-1 RNA on Day 8 ← temsavir · categorical (graded) response model | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lagishetty_2020_ddQTcF](drugs/drug_temsavir/pd_Lagishetty_2020_ddQTcF.md) | difference vs. placebo for change from baseline in Fridericia‐corrected QT interval ← temsavir · direct linear effect | — | Lagishetty C et al., Effects of Temsavir, Active Moiety of A…, Clinical and translational… (2020) | [10.1111/cts.12763](https://doi.org/10.1111/cts.12763) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Parasrampuria_2025_HIV_1_RNA](drugs/drug_temsavir/pd_Parasrampuria_2025_HIV_1_RNA.md) | Change in plasma HIV-1 RNA from Day 1 to Day 8 ← temsavir · direct Emax (saturable) effect | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Thakkar_2023.pdf` | Thakkar N et al., Model-Based Dose Selection of Fostemsav…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1291](https://doi.org/10.1002/cpdd.1291) | [37329260](https://pubmed.ncbi.nlm.nih.gov/37329260) | The paper describes a population pharmacokinetic model for temsavir in pediatric populations and a bioavailability study in adults, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only the study design and dose recommendations. |
| `Gorycki_2022.pdf` | Gorycki P et al., Pharmacokinetics, metabolism and excret…, Xenobiotica; the fate of fo… (2022) | pgx | 7 | [10.1080/00498254.2022.2119179](https://doi.org/10.1080/00498254.2022.2119179) | [36083110](https://www.ncbi.nlm.nih.gov/pubmed/36083110) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-09T10:16:49.611031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Gorycki_2022 | not_relevant | 0 | 0 | The paper describes the effect of ritonavir co-administration on fostemsavir/temsavir PK, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Islam_2024 | irrelevant | 2 | 0 | The paper describes in vitro formulation development and biodistribution of lipid nanoparticles, lacking quantitative PK parameters (CL, V, ka) for temsavir. |
| popPK | Lagishetty_2020 | irrelevant | 2 | 1 | The study is a Thorough QT (TQT) safety study focused on cardiac endpoints; while it mentions PK characterization, the quantitative PK parameters (CL, V, etc.) are not reported in the evidence, being referred to supplementary figures or non-compartmental methods without listing the values. |
| PGx | Moore_2022 | not_relevant | 0 | 10 | The paper reports drug-drug interactions (DDIs) involving CYP3A/P-gp inhibitors, not pharmacogenomic effects based on gene variants/genotypes. |
| popPK | Thakkar_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for temsavir in pediatric populations and a bioavailability study in adults, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only the study design and dose recommendations. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 10:16 UTC</sub>
