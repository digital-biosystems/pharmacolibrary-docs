<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;promazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Promazine_McGree2013_reference&quot;,&quot;label&quot;:&quot;McGree_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_promazine/Promazine_McGree2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# promazine

- **generic name:** promazine
- **ATC codes:** `N05AA03`
- **DrugBank:** [DB00420](https://go.drugbank.com/drugs/DB00420) · **PubChem:** [CID 4926](https://pubchem.ncbi.nlm.nih.gov/compound/4926)
- **molar mass:** 284.419 g/mol (C17H20N2S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Promazine is a phenothiazine antipsychotic used to treat schizophreniform disorder and vomiting. It has been withdrawn from human use, though it remains an approved veterinary drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419822](https://www.wikidata.org/wiki/Q419822) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:02 | 14:14 | 0/1/1 | 2/0/0 | 0/0/0 | 477,092/21,430 | ollama / glm-5.3-flash | 11 | 1/7 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [McGree_2013_reference](drugs/drug_promazine/Promazine_McGree2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | McGree JM et al., A Bayesian approach for estimating dete…, Journal of veterinary pharm… (2013) | [10.1111/j.1365-2885.2013.01389.x](https://doi.org/10.1111/j.1365-2885.2013.01389.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Curry_1990_reference](drugs/drug_promazine/Promazine_Curry1990_reference.md) | — | 1-compartment (no model) | 0 | Curry SH et al., A third, "deep," compartment for phenot…, Psychopharmacology bulletin (1990) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Ashoor_2011_ACh_induced_current](drugs/drug_promazine/pd_Ashoor_2011_ACh_induced_current.md) | acetylcholine (100 μM)-induced current through α7-nicotinic acetylcholine receptor ← promazine · inhibition effect | — | Ashoor A et al., Effects of phenothiazine-class antipsyc…, European journal of pharmac… (2011) | [10.1016/j.ejphar.2011.10.020](https://doi.org/10.1016/j.ejphar.2011.10.020) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jakubovic_1982_enkephalin_degradation_enkephalin_hydrolyzing_activity](drugs/drug_promazine/pd_Jakubovic_1982_enkephalin_degradation_enkephalin_hydrolyzing.md) | enkephalin degradation (enkephalin-hydrolyzing activity) ← promazine · inhibition effect | — | Jakubovic A, Degradation of met-enkephalin by extrac…, Peptides (1982) | [10.1016/0196-9781(82)90136-x](https://doi.org/10.1016/0196-9781(82)90136-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=promazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), CHRM1 (target), CHRM5 (binder), DRD2 (target), HRH1 (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 69 matched, 64 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Curry_1990.pdf` | Curry SH et al., A third, "deep," compartment for phenot…, Psychopharmacology bulletin (1990) | popPK | 8 | not captured | [2371373](https://pubmed.ncbi.nlm.nih.gov/2371373) | Human volunteer study with compartmental modeling of promazine reporting numeric rate constants and renal clearance, though no CL/V values are given. |

<sub>queue written 2026-10-06T16:55:38.504423+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | This is a ToxCast high-throughput screening review about environmental chemicals and diabetes/obesity; promazine is not the subject drug and no PK parameters appear. |
| PGx | Aänismaa_2008 | not_relevant | 0 | 0 | In vitro P-gp ATPase thermodynamics with promazine; no gene variant/genotype effect on PK/PD parameters. |
| PGx | Daniel_2002 | not_relevant | 3 | 5 | Chemical inhibition of CYP isoenzymes in rat microsomes, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Daniel_2003 | not_relevant | 0 | 5 | Reports drug-drug enzyme inhibition by promazine in vitro, not a gene variant/genotype effect on promazine PK/PD. |
| PGx | Daniel_2005 | not_relevant | 0 | 0 | Drug-drug/enzyme inhibition study in rats; no gene variant/genotype effect on promazine PK/PD reported. |
| PGx | Di_2009 | not_relevant | 2 | 1 | Promazine is only listed as a CYP2A6 substrate; no genotype-specific effect on its PK/PD parameters is reported. |
| popPK | Iversen_2025 | irrelevant | 0 | 0 | This is a liposome/drug-delivery chemistry study with no promazine PK parameters or numeric disposition values. |
| popPK | Kashyap_2025 | irrelevant | 0 | 0 | Paper is about DNA-programmable PROTACs; no promazine PK parameters anywhere. |
| popPK | McGree_2013 | irrelevant | 2 | 5 | The subject drug is acepromazine and its metabolite 2-(1-hydroxyethyl)promazine (HEPS), not promazine itself; numeric CL (769 L/h) and V (6874 L) for the metabolite are present but pertain to a different parent drug. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | This is a BLVRB inhibitor (BCT1028) PK study in mice; promazine is not mentioned at all. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | This is an in vitro/in silico antimicrobial study of Hippocratea indica plant fractions against Salmonella Typhi; no promazine PK parameters are reported anywhere. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on adenine derivatives as A2AAR/CK1δ inhibitors; promazine is not mentioned and no PK parameters exist. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | This is a PROTAC proteomics/degradation study in HL-60 cells; no promazine PK parameters appear anywhere. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | This is a doxorubicin-loaded magnetic nanorobot study; promazine is not mentioned, and PK parameters are only in Table S1 (not provided) for DOX anyway. |
| PGx | Wójcikowski_2003 | not_relevant | 3 | 5 | Study identifies CYP isoforms catalyzing promazine metabolism via correlations/inhibitors in vitro, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Wójcikowski_2006 | not_relevant | 2 | 3 | Promazine is only mentioned as a comparison drug; the paper studies thioridazine metabolism by CYPs, with no genotype effect on promazine PK/PD parameters. |
| PGx | Wójcikowski_2010 | not_relevant | 2 | 3 | In vitro enzyme contribution study for chlorpromazine; promazine only mentioned as prior comparison, no genotype/phenotype effect on promazine PK/PD reported. |
| PGx | Wójcikowski_2012 | not_relevant | 0 | 0 | In vitro autoinduction of metabolism in hepatocytes; no gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | This is a tumor immunology/metabolism study with no promazine PK parameters reported. |
| PGx | Zivković_2010 | not_relevant | 3 | 2 | Case reports associate CYP2D6/DRD2 polymorphisms with MNS susceptibility, not with any quantified PK/PD parameter of promazine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:55 UTC</sub>
