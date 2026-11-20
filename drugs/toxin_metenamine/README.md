<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Metenamine&quot;}]"></div>

# Metenamine

- **generic name:** Metenamine
- **T3DB:** [T3D4834](http://www.t3db.ca/toxins/T3D4834) · **PubChem:** [CID 4101](https://pubchem.ncbi.nlm.nih.gov/compound/4101)
- **groups:** approved, investigational, vet_approved

## About

Metenamine belongs to the family of Aminals. These are organic compounds containing the aminal functional group. Metenamine is an antimicrobial food preservative, but is of limited use and usage is declining. …

- **Category:** Household Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4834">T3DB T3D4834</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 100-97-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:6824">ChEBI 6824</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Methenamine (metenamine) | parent | 140.19 | C6H12N4 | PubChem | [4101](https://pubchem.ncbi.nlm.nih.gov/compound/4101) | Allgén_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Allgén_1979_reference](drugs/toxin_metenamine/Metenamine_Allgn1979_reference.md) | — | 1-compartment (no model) | 1 | Allgén LG et al., Biological fate of methenamine in man.…, Acta obstetricia et gynecol… (1979) | [10.3109/00016347909154051](https://doi.org/10.3109/00016347909154051) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-18 14:16 | 9:37 | 0/1/0 | 0/0/0 | 0/0/0 | 108,386/5,390 | einfracz / qwen3.8-flash-next | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Allgén_1979.pdf` | Allgén LG et al., Biological fate of methenamine in man.…, Acta obstetricia et gynecol… (1979) | popPK | 9 | [10.3109/00016347909154051](https://doi.org/10.3109/00016347909154051) | [484222](https://pubmed.ncbi.nlm.nih.gov/484222) | The paper reports a half-life of ~4 hours and an apparent distribution volume, but the exact numerical values for renal clearance and distribution volume are not explicitly listed in the text, requiring estimation or external lookup for precision. |

<sub>queue written 2026-11-18 14:16 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akizawa_2013 | irrelevant | 0 | 0 | The paper concerns radiolabeled antibody fragments and does not mention metenamine. |
| popPK | Brogden_1982 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of trimethoprim, with methenamine mentioned only as a comparator in clinical efficacy trials, providing no kinetic parameters for methenamine. |
| popPK | Byeon_2019 | irrelevant | 0 | 0 | The paper studies tolterodine pharmacokinetics, not metenamine, and metenamine is not mentioned in the provided evidence. |
| popPK | Chuang_2026 | irrelevant | 0 | 0 | The paper is about HMTA, a distinct chemical substance with no mention of metenamine or its toxicokinetics. |
| popPK | Donath_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of tolterodine and its metabolite, with no mention of metenamine or its kinetic parameters. |
| popPK | Epstein_1994 | irrelevant | 0 | 0 | The paper discusses Pneumocystis carinii persistence and methenamine silver staining, containing no toxicokinetic parameters for metenamine. |
| popPK | Gleckman_1979 | irrelevant | 1 | 0 | The text is a narrative review summary that mentions pharmacokinetics qualitatively but reports no specific quantitative parameters or numeric values for metenamine. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | The paper reports toxicokinetics for humantenmine, not metenamine, which is not mentioned. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | Metenamine appears only as part of a histological staining method name, with no kinetic parameters or study of metenamine. |
| popPK | Ishimaru_1996 | irrelevant | 0 | 0 | The paper is a neuropathological study on Apo E and beta-amyloid in ischemic brain tissue, where "methenamine" appears only in the name of a staining technique (methenamine-silver), not as a subject substance with kinetic parameters. |
| popPK | Kalowski_1975 | irrelevant | 1 | 1 | The study is a clinical trial on prophylaxis efficacy and safety, reporting no toxicokinetic parameters. |
| popPK | Kitta_2023 | irrelevant | 0 | 0 | The paper studies fesoterodine and its metabolite 5-HMT, with no mention of metenamine. |
| popPK | Klinge_1982 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | Kreyling_1993 | irrelevant | 0 | 0 | The paper reports kinetic parameters for cobalt oxide particles, not metenamine; metenamine is not mentioned. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a review on histone methyltransferase inhibitors for cancer and contains no data on metenamine or any quantitative toxicokinetic parameters. |
| popPK | Lin_2019 | irrelevant | 0 | 0 | The paper focuses on fesoterodine, its metabolite 5-HMT, and mirabegron; metenamine is not mentioned or studied. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The paper discusses 5-hydroxymethyl tolterodine, not metenamine. |
| popPK | Malhotra_2008 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of fesoterodine and its metabolite 5-HMT, with no mention of metenamine. |
| popPK | Malhotra_2009 | irrelevant | 0 | 0 | The paper focuses exclusively on fesoterodine and its metabolite 5-HMT, with no mention or data regarding metenamine. |
| popPK | Malhotra_2009_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for fesoterodine and its metabolite 5-HMT, with no mention of metenamine. |
| popPK | Malhotra_2009_3 | irrelevant | 0 | 0 | The paper concerns fesoterodine and its metabolite 5-HMT, with no mention of metenamine. |
| popPK | Malhotra_2009_4 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for fesoterodine and its metabolite 5-HMT, not metenamine. |
| popPK | Malhotra_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for fesoterodine and its metabolite 5-HMT, not metenamine. |
| popPK | Malhotra_2011 | irrelevant | 0 | 0 | The paper studies fesoterodine and its metabolite 5-HMT, not metenamine; metenamine is not mentioned. |
| popPK | Malhotra_2011_2 | irrelevant | 0 | 0 | The paper investigates fesoterodine and tolterodine in humans, with no mention of metenamine or its kinetic parameters. |
| popPK | Mohammadi-Ghalehbin_2023 | irrelevant | 0 | 0 | The paper concerns the synthesis and antileishmanial activity of thiourea derivatives and contains no mention of metenamine or its kinetic parameters. |
| popPK | Oishi_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for fesoterodine and its metabolite tolterodine, not metenamine. |
| popPK | Oishi_2018 | irrelevant | 0 | 0 | The paper concerns ketoconazole and fesoterodine/5-HMT and contains no data or mention of metenamine. |
| popPK | Rao_2015 | irrelevant | 0 | 0 | The paper concerns metoprolol, not metenamine, and no kinetic parameters for metenamine are present. |
| popPK | Ridley_1983 | irrelevant | 0 | 0 | The paper concerns the degradation of Mycobacterium leprae and uses methenamine silver as a staining reagent, reporting no quantitative kinetic parameters for metenamine itself. |
| popPK | Rodríguez-Lopez_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for fesoterodine and its metabolite 5-HMT, not metenamine; metenamine is not mentioned in the text. |
| popPK | Sano_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for fesoterodine (and its metabolite 5-HMT), not metenamine; metenamine is not mentioned as a subject of kinetic analysis. |
| popPK | Sen_2019 | irrelevant | 0 | 0 | Metenamine is mentioned only as a chemical agent used for histopathological staining (methenamine silver stain), not as the substance being studied for toxicokinetics; the pharmacokinetic data provided are for coumarin glycosides. |
| popPK | Shin_2012 | irrelevant | 0 | 0 | The paper is a pharmacokinetic study of fesoterodine/5-HMT, with no mention of metenamine or its parameters. |
| popPK | Simon_2009 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for fesoterodine and tolterodine, with no mention of metenamine. |
| popPK | Tan_2013 | irrelevant | 0 | 0 | The paper is a clinical case report on tattoo treatment and mentions Methenamine only as part of a chemical name for a histological stain (Grocott's Methenamine Silver), with no toxicokinetic data. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The paper concerns epigenetic regulation of neprilysin expression in mouse neurons under hypoxia and contains no data on metenamine. |
| popPK | Waters_2017 | irrelevant | 0 | 0 | The paper concerns Pinometostat, not metenamine, and metenamine is not mentioned. |
| popPK | Yoshikawa_1990 | irrelevant | 0 | 0 | Methenamine is mentioned only as a component of a histological staining reagent (Periodic acid-silver methenamine), with no toxicokinetic data reported. |
| popPK | de_2011 | irrelevant | 0 | 0 | The paper focuses on fesoterodine and its metabolites in humans, with no mention of metenamine or any kinetic data for it. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper focuses on hydromethylthionine (HMT) pharmacokinetics, not metenamine, which is not mentioned as a subject substance. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetenamine%5D&body=Drug%3A%20metenamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_metenamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-18 14:16 UTC</sub>
